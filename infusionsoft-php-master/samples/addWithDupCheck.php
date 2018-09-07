<?php
session_start();

require_once '../vendor/autoload.php';

$infusionsoft = new \Infusionsoft\Infusionsoft(array(
    'clientId' => '2tgunsdsb9dnkje5uker5nkv ',
    'clientSecret' => 'BhYG4nuVQ4',
    'redirectUri' => '181seconds.com/FosterAmerica',
));


// By default, the SDK uses the Guzzle HTTP library for requests. To use CURL,
// you can change the HTTP client by using following line:
// $infusionsoft->setHttpClient(new \Infusionsoft\Http\CurlClient());

// If the serialized token is available in the session storage, we tell the SDK
// to use that token for subsequent requests.

if (isset($_SESSION['token'])) {
    $infusionsoft->setToken(unserialize($_SESSION['token']));
}

// If we are returning from Infusionsoft we need to exchange the code for an
// access token.
if (isset($_GET['code']) and !$infusionsoft->getToken()) {
    $infusionsoft->requestAccessToken($_GET['code']);
}

function add($infusionsoft, $email)
{
    echo "im adding";
    $email1         = new \stdClass;
    $email1->field  = 'EMAIL1';
    $email1->email  = 'john.doe.13@example.com';
    $contact        = [
                       'email_addresses' => [$email1],
    ];
    echo "before return";
    return $infusionsoft->contacts()->create($contact);
}

$atoken = '7kgkx4tj7uf4d92atgyqw2cz';
echo $atoken;
$infusionsoft->setToken($atoken);

if ($infusionsoft->getToken()) {
    try {
        $email = 'john.doe4@example.com';

        try {
            $cid = $infusionsoft->contacts()->where('email', $email)->first();
        } catch (\Infusionsoft\InfusionsoftException $e) {
            $cid = add($infusionsoft, $email);
        }
        echo $cid;

    } catch (\Infusionsoft\TokenExpiredException $e) {
        // If the request fails due to an expired access token, we can refresh
        // the token and then do the request again.
        $infusionsoft->refreshAccessToken();

        $cid = add($infusionsoft);
    }

    $contact = $infusionsoft->contacts()->with('custom_fields')->find($cid->id);

    var_dump($contact->toArray());

    // Save the serialized token to the current session for subsequent requests
    $_SESSION['token'] = serialize($infusionsoft->getToken());
} else {
    echo '<a href="' . $infusionsoft->getAuthorizationUrl() . '">Click here to authorize</a>';
}