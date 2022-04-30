<?php
//get data from form  

$name = $_POST['name'];
$email= $_POST['email'];
$message= $_POST['msg'];
// $subject=$_POST['subject'];

$to = "vpachpute22@mail.com";

$subject = "Mail From portfolio";
$txt ="Name = ". $name . "\r\n  Email = " . $email . "\r\n Message =" . $message;
$headers = "From: noreply@vaibhav.info" . "\r\n" .
"CC: somebodyelse@example.com";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
header("Location:thankyou.html");
?>