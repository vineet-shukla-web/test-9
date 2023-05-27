<?php
include 'dbcon.php';
header('Content-Type: application/json');
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    //$email = $data['email'];
    $password = $data['password'];
    $phone = $data['phone'];
    $phoneNumber = "+91" . $phone;
    $name = $data['name'];
    $userProperties = [
        //'email' => $email,
        'emailVerified' => false,
        'phoneNumber' => $phoneNumber,
        'password' => $password,
        'displayName' => $name,
        // 'photoUrl' => 'http://www.example.com/12345678/photo.png',
        // 'disabled' => false,
    ];

    try {
        $result = $auth->createUser($userProperties);
        if ($result) {
            $msg = array('success' => 1, 'user' => "User created successfully");
        } else {
            $msg = array('success' => 0, 'user' => $result);
        }

    } catch (\Exception $ex) {
        $msg = array('success' => 0, 'user' => $ex->getMessage());
    }
    echo json_encode($msg);
}
