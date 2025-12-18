<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Load environment variables (do NOT commit .env)
$envPath = __DIR__ . '/.env';
if (!file_exists($envPath)) {
  http_response_code(500);
  echo json_encode(["error" => "Server misconfiguration"]);
  exit;
}

$env = parse_ini_file($envPath);

// Load PHPMailer
require __DIR__ . '/mailer/PHPMailer.php';
require __DIR__ . '/mailer/SMTP.php';
require __DIR__ . '/mailer/Exception.php';

header("Content-Type: application/json");

// ---- Anti-bot honeypot ----
if (!empty($_POST['company'])) {
  echo json_encode(["ok" => true]);
  exit;
}

// ---- Validate input ----
$name = trim($_POST['name'] ?? '');
$email = trim($_POST['email'] ?? '');
$message = trim($_POST['message'] ?? '');

if ($name === '' || $email === '' || $message === '') {
  http_response_code(400);
  echo json_encode(["error" => "Missing required fields"]);
  exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  http_response_code(400);
  echo json_encode(["error" => "Invalid email address"]);
  exit;
}

// ---- Send email ----
$mail = new PHPMailer(true);

try {
  $mail->isSMTP();
  $mail->Host = 'smtp.hostinger.com';
  $mail->SMTPAuth = true;
  $mail->Username = 'info@britaniaflodec.co.uk';
  $mail->Password = $env['MAIL_PASSWORD'];
  $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; // SSL
  $mail->Port = 465;

  $mail->CharSet = 'UTF-8';

  $mail->setFrom(
    'info@britaniaflodec.co.uk',
    'Britania Flodec Website'
  );

  // Receive at same inbox (change if needed)
  $mail->addAddress('info@britaniaflodec.co.uk');

  // Reply goes to the customer
  $mail->addReplyTo($email, $name);

  $mail->Subject = 'New contact form submission';

  $mail->Body =
    "Name: {$name}\n" .
    "Email: {$email}\n\n" .
    "Message:\n{$message}";

  $mail->send();

  echo json_encode(["ok" => true]);

} catch (Exception $e) {
  http_response_code(500);
  echo json_encode([
    "error" => "Email failed",
    "details" => $mail->ErrorInfo
  ]);
}
