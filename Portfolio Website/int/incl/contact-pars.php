<?php
    $name = '';
    $email = '';
    $messages = '';
    $errors = array();

    use PHPMailer\PHPMailer\PHPMailer;

    if(isset($_POST['did_submit'])){
        //sanitize every field
        $name = trim(strip_tags($_POST['name'] ));
        $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
        $messages = trim(strip_tags($_POST['message']));
        //validate
        $valid = true;
        //name cannot be blank or longer than 50char
    if(strlen($name) == 0 OR strlen($name) > 50) {
        $valid=false;
        $errors['name'] = 'Your name must between 1 - 50 characters long.';
    }
    if( ! filter_var($email, FILTER_VALIDATE_EMAIL)){
        $valid=false;
        $errors['email']='Provide a valid e-mail, such as name@provider.com';
    }
    if(strlen($messages) == 0 OR strlen($messages) > 100) {
        $valid=false;
        $errors['messages'] = 'Your message must between 1 - 1200 characters long.';
    }

    $mailer = new PHPMailer(true);
    }
    if ($valid){

        try{
            // Set up to, from, and the message body.  The body doesn't have to be HTML; check the PHPMailer documentation for details.
            $mailer->Sender = $email;
            $mailer->AddReplyTo($email, $name);
            $mailer->SetFrom($email, $name);
            $mailer->AddAddress('ginnygraybilldesigns@gmail.com');
            $mailer->Subject = 'A guest has sent you a message';
            $mailer->MsgHTML("<p>$messages</p>");
        
            // Set up our connection information.
            $mailer->IsSMTP();
            //show report when done
            $mailer->SMTPDebug = DEBUG_MODE; 
            $mailer->SMTPAuth = true;
            $mailer->SMTPSecure = 'ssl';
            $mailer->Port = 465;
            $mailer->Host = 'smtp.gmail.com';
            //Username to use for SMTP authentication - use full email address for gmail
            $mailer->Username = 'ginnygraybilldesigns@gmail.com';
        
            //Your gmail account password goes here
            $mailer->Password = 'aMgB5uwk53#Y';
        
            // All done! send the mail and make sure it worked
            if( $mailer->Send() ){
                //success
                $message = "Thank you for contacting me. I'll be in touch within 3 business days.";
                $class = 'success';
            }
        }
        catch(phpmailerException $e){
            /*phpmailer exception*/
            $message = 'Sorry, the server could not send your message at this time.';
            $class = 'error';
            $errors[] =  $e->errorMessage();
        }
        catch(Exception $e) {
            $message = 'The mail could not send';
            $class = 'error';
            $errors[] = $e->getMessage(); 
        }

    } else {
        $message = '';
        $class= 'error';
    }