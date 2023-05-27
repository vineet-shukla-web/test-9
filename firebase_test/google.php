<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Retrieve the Google ID token from the POST request
    $id_token = $_POST['id_token'];

    // Verify the Google ID token using the Firebase REST API
    $firebase_api_key = 'YOUR_FIREBASE_WEB_API_KEY';
    $url = "https://www.googleapis.com/oauth2/v3/tokeninfo?id_token={$id_token}&key={$firebase_api_key}";
    $response = file_get_contents($url);
    $json = json_decode($response, true);

    if (isset($json['email'])) {
        // Google ID token is valid, create or authenticate the Firebase user using the Firebase REST API
        $firebase_rest_api_key = 'YOUR_FIREBASE_REST_API_KEY';
        $url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithIdp?key={$firebase_rest_api_key}";
        $data = [
            'requestUri' => 'http://localhost',
            'postBody' => "id_token={$id_token}&providerId=google.com",
            'returnSecureToken' => true,
        ];
        $options = [
            'http' => [
                'method' => 'POST',
                'header' => "Content-Type: application/x-www-form-urlencoded\r\n",
                'content' => http_build_query($data),
            ],
        ];
        $context = stream_context_create($options);
        $response = file_get_contents($url, false, $context);
        $json = json_decode($response, true);

        if (isset($json['idToken'])) {
            // Firebase user authentication successful, redirect to the home page
            $_SESSION['firebase_token'] = $json['idToken'];
            header('Location: /home.php');
            exit;
        }
    }
}

// Render the Google Sign-In button
$google_client_id = 'YOUR_GOOGLE_CLIENT_ID';
?>
<html>
<head>
    <meta name="google-signin-client_id" content="<?php echo $google_client_id ?>">
    <script src="https://apis.google.com/js/platform.js" async defer></script>
</head>
<body>
    <div class="g-signin2" data-onsuccess="onSignIn"></div>

    <script>
        function onSignIn(googleUser) {
            // Retrieve the Google ID token and submit the form to the server
            var id_token = googleUser.getAuthResponse().id_token;
            var form = document.createElement('form');
            form.method = 'post';
            form.action = '/google-login.php';
            var input = document.createElement('input');
            input.type = 'hidden';
            input.name = 'id_token';
            input.value = id_token;
            form.appendChild(input);
            document.body.appendChild(form);
            form.submit();
        }
    </script>
</body>
</html>
