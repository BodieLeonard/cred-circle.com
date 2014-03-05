<?php

// get list of all contacts
$app->get($contact, function () use ($app) {

		$app->response()->header('Content-Type', 'application/json');

		$data = R::find('user');
		$data = R::exportAll($data); 

		$callback = array("status" => ['success'=>'true'], "data" => $data);
		echo json_encode($callback);
});