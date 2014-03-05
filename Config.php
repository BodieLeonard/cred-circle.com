<?php

define('DB_NAME',          'circlecredera');
define('DB_USER',          'root');
define('DB_PASSWORD',      'password');
define('DB_HOST',          '127.0.0.1');

// SETUP DB CONNECTION
R::setup('mysql:host='.DB_HOST.';dbname='.DB_NAME,DB_USER,DB_PASSWORD); //mysql
//R::$writer->setUseCache(true);
R::freeze(true);