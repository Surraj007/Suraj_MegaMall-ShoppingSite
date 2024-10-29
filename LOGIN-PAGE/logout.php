<?php
session_start();

// Check if user is logged in, else redirect to homepage
if (!isset($_SESSION['user_id'])) {
    header("Location: ../index.html");
    exit;
}

// Destroy the session amd log out the user
session_unset();
session_destroy();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Goodbye from Suraj Mega Mall</title>
    <link rel="stylesheet" href="login-styles.css">
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Roboto:wght@400;500&display=swap" rel="stylesheet">
    
   
</head>
<body>
    <div class="logout-container">
        <h1>Goodbye!</h1>
        <p>Thank you for shopping with us at Suraj Mega Mall.</p>
        <p>We hope to see you again soon. Safe shopping!</p>
        <a href="../index.html">Return to Home</a>
    </div>
</body>
</html>
