<?php
	$MyUsername = "";
	$MyPassword = "";
	$MyHostname = "";
	$MyDatabase = "";
	$conn = mysqli_connect($MyHostname, $MyUsername, $MyPassword, $MyDatabase);

	// Check connection
	if ($conn->connect_error) {
    		die("Connection failed: " . $conn->connect_error);
	}
	echo "Connected successfully";
?>
