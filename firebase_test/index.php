<?php

include('dbcon.php');
try{

$signInResult = $auth->signInWithEmailAndPassword("vineets081@gmail.com", '123456');

} catch (\Kreait\Firebase\Auth\SignIn\FailedToSignIn $e) {
    echo $e->getMessage();

}

// $userProperties = [
//     'email' => 'user@example.com',
//     'emailVerified' => false,
//     'phoneNumber' => '+15555550100',
//     'password' => 'secretPassword',
//     'displayName' => 'John Doe',
//     'photoUrl' => 'http://www.example.com/12345678/photo.png',
//     'disabled' => false,
// ];

// $createdUser = $auth->createUser($userProperties);

// include('dbcon.php');
// $userProperties = [
//     'email' => 'user@example.com',
//     'emailVerified' => false,
//     'phoneNumber' => '+15555550100',
//     'password' => 'secretPassword',
//     'displayName' => 'John Doe',
//     'photoUrl' => 'http://www.example.com/12345678/photo.png',
//     'disabled' => false,
// ];

// require __DIR__.'/vendor/autoload.php';
// use Kreait\Firebase\Factory;

// $factory = (new Factory)
//     ->withServiceAccount('fir-test-8aacd-firebase-adminsdk-83wki-fabb9155fa.json')
//     ->create();

// function login($email, $password) {
//     $auth = $factory->getAuth();
//     $signInResult = $auth->signInWithEmailAndPassword($email, $password);
//     return $signInResult->user;
// }

// // Example usage
// $user = login('example@email.com', 'password');

// if ($user) {
//     echo json_encode("success");
//     // Redirect to dashboard or home page
// } else {
//     // Display error message
// }
// header('Content-Type: application/json');
// require __DIR__.'/vendor/autoload.php';

// use Kreait\Firebase\Factory;
// use Kreait\Firebase\ServiceAccount;
// use Kreait\Firebase\Database;


// $firebase = (new Factory)
//     ->withServiceAccount(__DIR__.'/fir-test-8aacd-firebase-adminsdk-83wki-fabb9155fa.json')
//     ->createDatabase();

// $auth = $firebase->createAuth();
// function login($email, $password) {
//     try {
//         $user = $auth->signInWithEmailAndPassword($email, $password);
//         return array('success' => true, 'user' => $user);
//     } catch (\Kreait\Firebase\Auth\SignIn\FailedToSignIn $e) {
//         return array('success' => false, 'message' => $e->getMessage());
//     }
// }

// if ($_SERVER['REQUEST_METHOD'] == 'POST') {
//     $data = json_decode(file_get_contents('php://input'), true);

//     $email = $data['email'];
//     $password = $data['password'];

//     $result = login($email, $password);

//     echo json_encode($result);
// }


