<?php
// Establish connection to the database
$con = new mysqli("localhost", "root", "", "optiview");

// Check the connection
if ($con->connect_error) {
    die("Connection failed: " . $con->connect_error);
} else {
    // Prepare the SQL statement
    $stmt = $con->prepare('INSERT INTO account (username, email, pass) VALUES (?, ?, ?)');
    
    // Bind parameters (sss = string, string, string)
    $stmt->bind_param("sss", $username, $email, $pass);
    
    // Execute the statement
    if ($stmt->execute()) {
        echo "Registration Successful!";
    } else {
        echo "Error: " . $stmt->error;
    }
    
    // Close the statement and connection
    $stmt->close();
    $con->close();
}

// Check if form is submitted
// if ($_SERVER["REQUEST_METHOD"] == "POST") {
//     // Sanitize and get form data
//     $username = mysqli_real_escape_string($con, $_POST['username']);
//     $email = mysqli_real_escape_string($con, $_POST['email']);
//     $password = mysqli_real_escape_string($con, $_POST['password']);
//     $confirm_password = mysqli_real_escape_string($con, $_POST['confirm-password']);

//     // Validate passwords match
//     if ($password !== $confirm_password) {
//         die("Passwords do not match.");
//     }

//     // Check if username or email already exists
//     $query = "SELECT * FROM account WHERE username = '$username' OR email = '$email'";
//     $result = mysqli_query($con, $query);
//     if (mysqli_num_rows($result) > 0) {
//         die("Username or email already exists.");
//     }

//     // Insert into the account table
//     $sql = "INSERT INTO account (username, email, pass) VALUES ('$username', '$email', '$password')";

//     // Check if insertion is successful
//     if (mysqli_query($con, $sql)) {
//         echo "Account created successfully!";
//     } else {
//         echo "Error: " . mysqli_error($con); // Debugging: display SQL errors
//     }
// }

// // Close the connection
// mysqli_close($con);
?>
