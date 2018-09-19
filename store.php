<?php 

//$email_to_add = $_POST['email'];
$email_to_add = 'test5@example.com';

if (strlen($email_to_add)<100 and filter_var($email_to_add, FILTER_VALIDATE_EMAIL)){
    $tmpfname = tempnam("./tmp", "usr");
    $handle = fopen($tmpfname, "w");
    fwrite($handle, $email_to_add);
    fclose($handle);
} 

echo file_get_contents('thanks.html', FALSE, null, 0, 1000);

?>