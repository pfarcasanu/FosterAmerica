<?php 

    // 1. retrieve and validate the input from serverside using regex
    // 2. insert address to database, call APIs
    // 3. if both above are successful --> success page
    // else --> error page: something wrong with the system, please come back again

    //echo $_POST["emailEntry"];
    namespace Infusionsoft;
    $infusionsoft = new \Infusionsoft\Infusionsoft(array(
        'clientId' => '2tgunsdsb9dnkje5uker5nkv',
        'clientSecret' => 'BhYG4nuVQ4',
        'redirectUri' => '181seconds.com/FosterAmerica',
    ));

    $_POST["emailEntry"] = "abc1@farcasanu.com";
    $url = 'https://api.infusionsoft.com/crm/rest/v1/contacts';
    $email = array("email" => $_POST["emailEntry"], "field" => "EMAIL1");
    $data = array('opt_in_reason' => 'FosterTrivia', 'email_addresses' => $email);
    //$data = array('opt_in_reason' => 'FosterTrivia', "email" => $_POST["emailEntry"]);
    $jsonDataEncoded = json_encode($data);
    echo $jsonDataEncoded;

    //use key 'http' even if you send the request to https://...
    $options = array(
        'http' => array(
            'header'  => "Authorization: Bearer h58rg9hb9szyb7qh4953bmkb\r\n".
                           "Content-Type: application/json\r\n",
            'method'  => 'POST',
            'content' => $jsonDataEncoded
        )
    );

    $context  = stream_context_create($options);
    $result = file_get_contents($url, false, $context); 
    if ($result === FALSE) { echo "error"; }

    var_dump($result);
?>