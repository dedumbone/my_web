<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

$servername = "localhost"; 
$username = "root"; 
$password = ""; 
$database = "mydatabase"; 

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['fname'])) {
    
    $stmt = $conn->prepare("INSERT INTO feedback (first_name, last_name, email, comment, subscribe) VALUES (?, ?, ?, ?, ?)");
    $stmt->bind_param("ssssi", $first_name, $last_name, $email, $comment, $subscribe);

   
    $first_name = $_POST['fname'];
    $last_name = $_POST['lname'];
    $email = $_POST['email'];
    $comment = $_POST['comment'];
    $subscribe = isset($_POST['subscribe']) ? 1 : 0; 

    if ($stmt->execute()) {
        echo "Have a great day!";
    } else {
        echo "Error: " . $stmt->error;
    }

    // Close connections
    $stmt->close();
} else {
    echo "No form data received.";
}

// Close the connection
$conn->close();
?>
<br>
<a style ="color: black;"href = "prac.html">Return</a>
