<?php

$url = 'https://api.infusionsoft.com/crm/rest/v1/contacts?access_token=v3ugjudmtp9ex2bxxcthy7uk';
$email_to_add = 'pfarcasanu@sample.com';
$site_owner   = 'xxx@yyy.zzz';

//
//TODO MUST VALIDATE EMAIL HERE. STOP SCRIPT ON VALIDATION FAILURE
//

$jstr = array(
      "email_addresses" => [
           array(
		'email' => $email_to_add,
		'field' => 'EMAIL1'
	   )
      ],
      "opt_in_reason" => "FosterTrivia"
);

$options = array(
    'http' => array(
        'header'  => "Content-Type: application/json\r\n" .
	             "Accept: application/json",
        'method'  => 'POST',
        'content' => json_encode($jstr)
    )
);

$iter    = 0;
$success = FALSE;

do {

   $context = stream_context_create($options);
   $result = file_get_contents($url, false, $context);
   if ($result !== FALSE) {
      $success = TRUE;
      break;
   }
   $iter += 1;
}
while (! $success and $iter < 3);

if ($success) {
   echo "Registration for $email_to_add has been completed. Thank you!";
} else {
  //
  //TODO: SEND AN EMAIL TO THE $site_owner that $email_to_add could not be added
  //
   echo "We are sorry, but registration for $email_to_add could not be completed at this time. The webmaster has been notified.";
}


?>