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

        $name = test_input($params->name);
        $email = test_input($params->email);
        $company = test_input($params->company);
        $phone = test_input($params->phone);
        $message = test_input($params->message);
        $mailBody = "Name: " . $name . "\n" . "Email: " . $email . "\n" . 
        "Company: " . $company  . "\n" . "Phone: " . $phone . "\n" . "\n" . "Message: " . "\n" . $message 
        . "\n" . "\n" . "-- \n This e-mail was sent from a contact form on the TrueChain website";

        $recipient = 'partner@truechain.pro';
        $subject = "TrueChain Contact Form";
        $headers = "From: TrueChain Contact <partner@truechain.pro>";

        mail($recipient, $subject, $mailBody, $headers);
        break;
    default: //Reject any non POST or OPTIONS requests.
        header("Allow: POST", true, 405);
        exit;
}
    function test_input($data) {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }
?>
