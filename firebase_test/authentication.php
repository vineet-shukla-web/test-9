<?php
include 'dbcon.php';
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    // $data = json_decode(file_get_contents('php://input'), true);
    // echo $data;
    $headers = getallheaders();

    if (isset($headers['token'])) {
        $authorization = $headers['token'];

    } 
    $idTokenString =  $authorization;
    try {
        $verifiedIdToken = $auth->verifyIdToken($idTokenString);
        echo "<pre>";
        print_r($verifiedIdToken);
        echo "<pre>";
    } catch (FailedToVerifyToken $e) {
        echo 'The token is invalid: ' . $e->getMessage();
    }
    catch(\Kreait\Firebase\Exception\InvalidArgumentException $ex){
        echo 'The token is invalid: ' . $ex->getMessage();
    }
}
