<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;


// Función para leer variables del archivo .env
function getEnvVar($varName) {
    $lines = file(__DIR__ . '/../.env', FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    foreach ($lines as $line) {
        list($name, $value) = explode('=', $line, 2);
        if ($name === $varName) {
            return trim($value);
        }
    }
    return null;
}

require 'phpmailer/Exception.php';
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $companyName = $_POST['companyName'] ?? '';
    $mobile = $_POST['mobile'] ?? '';
    $service = $_POST['service'] ?? '';

    $mail = new PHPMailer(true);

    try {
        // Configuración del servidor SMTP
        $mail->isSMTP();
        $mail->Host       = getEnvVar('SMTP_HOST');
        $mail->SMTPAuth   = true;
        $mail->Username   = getEnvVar('SMTP_USER');
        $mail->Password   = getEnvVar('SMTP_PASS');
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port       = getEnvVar('SMTP_PORT');

        // Configurar remitente y destinatario
        $mail->setFrom(getEnvVar('SMTP_USER'), 'Formulario Web');
        $mail->addAddress('diegoanrora@gmail.com'); 

        // Contenido del correo
        $mail->isHTML(true);
        $mail->Subject = 'New client request';
        $mail->Body    = "
            <h2>New Contact</h2>
            <p><strong>Company:</strong> $companyName</p>
            <p><strong>Phone:</strong> $mobile</p>
            <p><strong>Service:</strong> $service</p>
        ";

        if ($mail->send()) {
            echo json_encode(["success" => true, "message" => "Email sent successfully"]);
        } else {
            echo json_encode(["success" => false, "message" => "The email could not be sent"]);
        }
    } catch (Exception $e) {
        echo json_encode(["success" => false, "message" => "Error: {$mail->ErrorInfo}"]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Access not allowed."]);
}
?>
