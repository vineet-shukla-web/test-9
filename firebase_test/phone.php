<?php
include('dbcon.php');



// Send SMS verification code
$phoneNumber = '+7827959074'; // replace with user's phone number
$verificationCode = $auth->signInWithPhoneNumber($phoneNumber);

echo json_encode($verificationCode);die;

// Verify the code entered by user
$code = '123456'; // replace with code entered by user
$verificationId = 'YOUR_VERIFICATION_ID'; // replace with verification ID received in the previous step
$verifiedIdToken = $auth->verifyPhoneNumber($verificationId, $code);

// Use the verified ID token to sign in the user
$user = $auth->signInWithVerifiedIdToken($verifiedIdToken);
?>