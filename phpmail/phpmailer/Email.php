<?php
namespace phpmailer;
class Email{
    /**
     * @param $to
     * @param $send
     * @param $content
     * @return bool
     */
    public static function send($to,$title,$content){
        date_default_timezone_set('PRC');
        if (empty($to)){
            return false;
        }
        try{
            $mail = new PHPMailer;
            $mail->isSMTP();
            //$mail->SMTPDebug = 2;
            $mail->Debugoutput = 'html';
            $mail->Host = config('email.host');
            $mail->Port = config('email.port');
            $mail->SMTPAuth = true;
            $mail->Username = config('email.username');
            $mail->Password = config('email.password');
            $mail->setFrom(config('email.username'), 'HuangYi');
            $mail->addAddress($to);
            $mail->Subject = $title;
            $mail->msgHTML($content);
            if (!$mail->send()) {
                return false;
                //echo "Mailer Error: " . $mail->ErrorInfo;
            } else {
                return true;
                //echo "Message sent success!";
            }
        }catch (phpmailerException $e){
            return false;
        }
    }
}