<?php
	if (empty($_POST['email'])) {
        $receiver = 'order@myrestuarant.com';
    } else {
        $receiver = 'order@myrestuarant.com'.',' .$_POST['email'];
    }

    // validation expected data exists
    if( !isset($_POST['subject']) ||
        !isset($_POST['message'])) {
        died('We are sorry, but there appears to be a problem with the form you submitted, subject=' . $_POST['subject'] . ", message=" . isset($_POST['message']));
    }

    $subject = $_POST['subject'];
    $message = $_POST['message'];
    $sender = 'noreply@myrestuarant.com';

    $header = 'MIME-Version: 1.0' . "\n";
    $header .= 'Content-type: text/html; charset=utf-8'."\n";
    $header .= 'From: My Restuarant'.' <'.$sender.'>'."\n";

    mail($receiver, $subject, $message, $header);

    echo 'message sent';

    function died($error) {
        echo $error;
        die();
    }
?>