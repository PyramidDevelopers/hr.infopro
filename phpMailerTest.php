<?php
require("phpmailer.php");

$mail = new PHPMailer();

$mail->From     = sahithk02@gmail.com;
$mail->FromName = Sahith;
$mail->AddAddress(sahith02@gmail.com,"Sahith Kurapati");

$mail->WordWrap = 50;
$mail->IsHTML(true);

$mail->Subject  =  "Contact Form Submitted";
$mail->Body     =  "This is the body of the message.";
?>
