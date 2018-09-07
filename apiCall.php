<?php 

    // 1. retrieve and validate the input from serverside using regex
    // 2. insert address to database, call APIs
    // 3. if both above are successful --> success page
    // else --> error page: something wrong with the system, please come back again

    //echo $_POST["emailEntry"];
    $_POST["emailEntry"] = "abc1@farcasanu.com";
    $url = 'https://api.infusionsoft.com/crm/rest/v1/contacts?access_token=49h5q26d34w6wkgmjhn8a7aq';
    $email = array("email" => $_POST["emailEntry"], "field" => "EMAIL1");
    //$data = array('opt_in_reason' => 'FosterTrivia', 'email_addresses' => $email);
    $data = array('opt_in_reason' => 'FosterTrivia', "email" => $_POST["emailEntry"]);
    $jsonDataEncoded = json_encode($data);
    echo $jsonDataEncoded;

    //use key 'http' even if you send the request to https://...
    $options = array(
        'http' => array(
            'header'  => "Content-Type: application/json\r\n",
            'method'  => 'POST',
            'content' => $jsonDataEncoded
        )
    );

    $context  = stream_context_create($options);
    $result = file_get_contents($url, false, $context); 
    if ($result === FALSE) { echo "error"; }

    var_dump($result);
?>