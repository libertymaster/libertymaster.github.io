<?php
// Enter your Host, username, password, database below. Liberty@2025
// I left password empty because i do not set password on localhost.'libertymaster'@'localhost' IDENTIFIED BY Liberty@2025
$con = mysqli_connect("localhost","libertymaster","Liberty@2025","registerdb");
// Check connection
if (mysqli_connect_errno())
  {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }
?>
