<?php

require __DIR__.'/vendor/autoload.php';
use Kreait\Firebase\Factory;
use Kreait\Firebase\Auth;
$factory = (new Factory)
->withServiceAccount('fir-test-8aacd-firebase-adminsdk-83wki-fabb9155fa.json')
->withDatabaseUri('https://fir-test-8aacd-default-rtdb.firebaseio.com');

$database = $factory->createDatabase();
$auth=$factory->createAuth();
?>