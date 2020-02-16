<?php
    $username   = "user";
    $password   = "Im7654321";
    $hostname   = "localhost";
    $database   = "Coronadb";
    // $tablename  = "tbl_OutbreakTotals";
    // $tablename  = "tbl_Outbreak";

    $conn = mysqli_connect($hostname, $username, $password, $database);

    try {
        $connection = new PDO(
            "mysql:host=$hostname;dbname=$database", 
            $username, 
            $password
        );
        $connection -> setAttribute(
            PDO::ATTR_ERRMODE, 
            PDO::ERRMODE_EXCEPTION
        );

        $sql = "SELECT Country, Infected, Dead, Continent
        FROM `tbl_Outbreak`
        ORDER BY Infected desc;";

        $results = $connection -> exec($sql);

        echo $results;



    } catch (PDOException $e) {
        echo "Form Entry Failed: " . $e -> getMessage() . "\n";
    }

    $connection = null;
?>


