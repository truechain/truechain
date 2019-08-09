<?php

switch($_SERVER['REQUEST_METHOD']){
    case("OPTIONS"): //Allow preflighting to take place.
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST");
        header("Access-Control-Allow-Headers: content-type");
        exit;
    case("POST"): //Send the email;
        header("Access-Control-Allow-Origin: *");

        $json = file_get_contents('php://input');

        $params = json_decode($json);

        $name = $params->name;
        $email = $params->email;
        $company = $params->company;
        $phone = $params->phone;
        $message = $params->message;
        $mailBody = "Name: " . $name . "\n" . "Email: " . $email . "\n" . 
        "Company: " . $company  . "\n" . "Phone: " . $phone . "\n" . "\n" . "Message: " . "\n" . $message 
        . "\n" . "\n" . "-- \n This e-mail was sent from a contact form on the TrueChain website";

        $recipient = 'hussain.hamoudi@clarkeglobal.co';
        $subject = "TrueChain Contact Form";
        $headers = "From: TrueChain Contact <hussain.hamoudi@clarkeglobal.co>";

        mail($recipient, $subject, $mailBody, $headers);
        break;
    default: //Reject any non POST or OPTIONS requests.
        header("Allow: POST", true, 405);
        exit;
}
?>
