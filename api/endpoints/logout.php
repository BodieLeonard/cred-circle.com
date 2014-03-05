<?php

$app->get("/logout", function () use ($app) {
   unset($_SESSION['user']);
   $app->view()->setData('user', null);
   $app->render('logout.php');
});

