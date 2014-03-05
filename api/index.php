<?php
// AUTHOR BODIE LEONARD
// CONTACT BODIE.DEV@GMAIL.COM
// DATE   ::  7/20/2013


$protocol = stripos($_SERVER['SERVER_PROTOCOL'],'https') === true ? 'https://' : 'http://';
define("API_URL", $protocol . $_SERVER['SERVER_NAME']);

// ALLOW APPS TO CONNECT TO SERVICE
header('Access-Control-Allow-Origin: *');

// LOAD require_onceD FILES
require_once 'vendor/autoload.php';
require_once 'libs/Slim/Slim.php';
require_once 'libs/RedBean/rb.php';
require_once '../Config.php';
require_once 'constants.php';


// LOAD require_onceD SLIM EXTRAS
require_once 'libs/Slim/Middleware.php';


use Slim\Slim;

// REGISTER SLIM AUTO LOADER
Slim::registerAutoloader();


// INITIALIZE APP
$app = new Slim(array(
  'debug' => true,
  'mode' => 'development'
));

// Globally ensure if `id` is used as a route parameter, it is numeric,
// so handlers do not have to check an `id` parameter before mapping it
// to a numeric `id` field on the Contacts database table.
\Slim\Route::setDefaultConditions(array(
    'id' => '[0-9]{1,}',
));

// LOAD ROUTES
// all the endpoints are loaded here
foreach (glob("endpoints/*.php") as $file) {
  require_once $file;
};

// RUN APP
$app->run();