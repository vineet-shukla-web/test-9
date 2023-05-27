<?php
include 'dbcon.php';
use Kreait\Firebase\Exception\Auth\FailedToVerifyToken;
use Kreait\Firebase\Auth\SignInResult\SignInResult;
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    $email = $data['email'];
    $password = $data['password'];
    try {
        $user = $auth->getUserByEmail($email);
        $signInResult = $auth->signInWithEmailAndPassword($email, $password);
        $idTokenString=$signInResult->idToken();
        // $idTokenString=$signInResult->refreshToken('kkkkk');
        //  $accessToken = $signInResult->token()->idToken();
        //$token=$signInResult->asTokenResponse();
 
        try {
           
            $verifiedIdToken = $auth->verifyIdToken($idTokenString);
            $uid = $verifiedIdToken->claims()->get('sub');
            $msg=array('success' => 1, 'id_token' => $idTokenString);
        } catch (FailedToVerifyToken $e) {
            $msg=array('success' => 0, 'message' => $e->getMessage());
        }
    } catch (\Kreait\Firebase\Auth\SignIn\FailedToSignIn $e) {
        $msg= array('success' => 0, 'message' => $e->getMessage());
    } catch (\Kreait\Firebase\Exception\Auth\UserNotFound $e) {
        $msg= $e->getMessage();
        $msg=array('success' => 0, 'message' => $msg);
    }
    echo json_encode($msg);
}
