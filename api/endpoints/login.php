<?php

$app->post("/login", function () use ($app) {

	try {

    $app->response()->header('Content-Type', 'application/json');
    $body = $app->request()->getBody();
    $json = json_decode($body, true);
    $user = R::findOne("user","email = ?", array($json['email']));

    if($user != NULL) {
      $data = R::exportAll($user)[0];

      if($user != NULL && is_null($data["registered"]) || $data["registered"] == 0 ) {

        $user->password = $json['password'];
        $user->registered = 1;
        R::store($user);

        $data = R::exportAll($user)[0];
        $callback = array("status" => ['success'=>'true'], "token" => "555444333", "data" => $data);
        echo json_encode($callback);

        // send registered email
        $to = $json['email'];

        $subject = 'Homepage App New User';

        $headers = "From: welcome@homepageapp.com\r\n";
        $headers .= "Reply-To: welcome@homepageapp.com\r\n";
        $headers .= "MIME-Version: 1.0\r\n";
        $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

        $message = '<html><body>';
        $message .= '<table id="Table_01" width="640" height="400" border="0" cellpadding="0" cellspacing="0" bordercolor="cccccc" style="border: 1px solid #cccccc; margin:10px auto;" align="center">
						<tr>
							<td rowspan="6" width="70" height="400" ></td>
							<td width="500" height="73" style="background: url(http://homepageapp.com/development/CDN/images/email/logo.gif); width:500px; height:73px"></td>
							<td rowspan="6" width="70" height="400"></td>
						</tr>
						<tr>
							<td align="center" style="font-family: Open Sans, Arial; color: #8b153e; font-weight:lighter; font-size: 30px;"
								width="500" height="53">
									Welcome
							</td>
						</tr>
						<tr>
							<td style="font-family: Open Sans, Arial; color: #c0b000; font-weight:lighter; font-size: 20px;"
								width="500" height="224">
								Thank you for registering with Homepage. We hope to make the home-buying process easier.
							</td>
						</tr>
						<tr>
							<td style="font-family: Open Sans, Arial; color: #8b153e; font-size: 12px;"
								width="500" height="59">
								Homepag Team <br>
								<a style="color: #8b153e;" href="http://www.homepageapp.com">homepageapp.com</a>
							</td>
						</tr>
						<tr>
							<td>
							</td>
						</tr>
					</table>';
        $message .= '</body></html>';

        mail($to, $subject, $message, $headers);



      } else {

        // user is registered move forward with login process
        $user = R::findOne("user"," email = ? AND password = ? ", array($json['email'],$json['password']));

        if($user != NULL) {

          // store user registration
          $user->registered = $user->registered + 1;
          R::store($user);

          $data = R::exportAll($user)[0];
          $callback = array("status" => ['success'=>'true'], "token" => "555444333", "data" => $data);
          echo json_encode($callback);

        } else {
          // bad login
          $callback = array("status" => ['error'=>'true'], "data" => "no user found");
          echo json_encode($callback);
        }

      }
    } else {
      $callback = array("status" => ['error'=>'true'], "data" => "no user found");
      echo json_encode($callback);
    }

	} catch (\Exception $e) {
		$callback = array("status" => ['error'=>'true'], "data" => "fail to run query");
		echo json_encode($callback);
	}
});

/*
$app->post("/login", function () use ($app) {

	//set vars
	$user = $_POST['user'];
	$pass = md5($_POST['pass']);

	if ($user&&$pass)
	{
	//connect to db
		$connect = mysql_connect("$server","$username","$password") or die("not connecting");
		mysql_select_db("users") or die("no db :'(");
		$query = mysql_query("SELECT * FROM $tablename WHERE username='$user'");

		$numrows = mysql_num_rows($query);


		if ($numrows!=0)
		{
			//while loop
			while ($row = mysql_fetch_assoc($query))
			{
				$dbusername = $row['username'];
				$dbpassword = $row['password'];
			}
		else
			die("incorrect username/password!");
		}
		else
			echo "user does not exist!";
	}
	else
		die("please enter a username and password!");
});*/


/*

$authenticate = function ($app) {
    return function () use ($app) {
        if (!isset($_SESSION['user'])) {
            $_SESSION['urlRedirect'] = $app->request()->getPathInfo();
            $app->flash('error', 'Login required');
            $app->redirect('/login');
        }
    };
};

$app->hook('slim.before.dispatch', function() use ($app) { 
   $user = null;
   if (isset($_SESSION['user'])) {
      $user = $_SESSION['user'];
   }
   $app->view()->setData('user', $user);
});




$app->get("/login", function () use ($app) {
   $flash = $app->view()->getData('flash');

   $error = '';
   if (isset($flash['error'])) {
      $error = $flash['error'];
   }

   $urlRedirect = '/';

   if ($app->request()->get('r') && $app->request()->get('r') != '/logout' && $app->request()->get('r') != '/login') {
      $_SESSION['urlRedirect'] = $app->request()->get('r');
   }

   if (isset($_SESSION['urlRedirect'])) {
      $urlRedirect = $_SESSION['urlRedirect'];
   }

   $email_value = $email_error = $password_error = '';

   if (isset($flash['email'])) {
      $email_value = $flash['email'];
   }

   if (isset($flash['errors']['email'])) {
      $email_error = $flash['errors']['email'];
   }

   if (isset($flash['errors']['password'])) {
      $password_error = $flash['errors']['password'];
   }

   #$app->render('login.php', array('error' => $error, 'email_value' => $email_value, 'email_error' => $email_error, 'password_error' => $password_error, 'urlRedirect' => $urlRedirect));
});

$app->post("/login", function () use ($app) {
    $email = $app->request()->post('email');
    $password = $app->request()->post('password');

    $errors = array();

    if ($email != "bodie.dev@gmail.com") {
        $errors['email'] = "Email is not found.";
    } else if ($password != "Summer") {
        $app->flash('email', $email);
        $errors['password'] = "Password does not match.";
    }

    if (count($errors) > 0) {
        $app->flash('errors', $errors);
        $app->redirect('/login');
    }

    $_SESSION['user'] = $email;

    if (isset($_SESSION['urlRedirect'])) {
       $tmp = $_SESSION['urlRedirect'];
       unset($_SESSION['urlRedirect']);
       $app->redirect($tmp);
    }

    $app->redirect('/');
});*/



/*
function isValidLogin($username, $password)
{
//    return true;
    return ($username == 'demo' && $password == 'password');
};

$checkLoggedOn = function ($app) {
    return function () use ($app) {
        if (!isValidLogin($app->getEncryptedCookie('username'),
            $app->getEncryptedCookie('password'))
        ) {
            $app->halt(401); // Unauthorized access
        }
    };
};


$app->post('/login', function () use ($app) {
    try {
        $username = $app->request()->post('username');
        $password = $app->request()->post('password');

        if (isValidLogin($username, $password)) {
            $app->setEncryptedCookie('username', $username, '1 day');
            $app->setEncryptedCookie('password', $password, '1 day');
            $app->response()->header('Content-Type', 'application/json');
            $app->response()->status(200); // OK
            echo json_encode(array('operation' => 'login', 'status' => 'ok'));
        } else {
            throw new AuthenticateFailedException();
        }
    } catch (AuthenticateFailedException $e) {
        $app->response()->status(401);
        $app->response()->header('X-Status-Reason', 'Login failure');
    } catch (Exception $e) {
        $app->response()->status(400);
        $app->response()->header('X-Status-Reason', $e->getMessage());
    }
});

*/



