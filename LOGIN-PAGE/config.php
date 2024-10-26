<?php
$servername = "localhost"; //db server name
$username = "root"; //db suername 
$password = ""; //db pass
$dbname = "surajmegamall"; //db name

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
