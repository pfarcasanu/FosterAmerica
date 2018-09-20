<?php 

$email_to_add = '';
if (!empty($_POST['emailEntry'])) {
     $email_to_add = $_POST['emailEntry'];
}

if (strlen($email_to_add)<100 and filter_var($email_to_add, FILTER_VALIDATE_EMAIL)){
    $tmpfname = tempnam("./ft-request", "usr");
    $handle = fopen($tmpfname, "w");
    fwrite($handle, $email_to_add);
    fclose($handle);
} 


header('Location: thanks.html');
exit;

?>
