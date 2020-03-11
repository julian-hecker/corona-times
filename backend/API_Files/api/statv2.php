<?php
    // Headers
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');

    include_once '../config/Database.php';
    include_once '../models/GetStatv2.php';

    // Instantiate & Connect DB
    $database = new Database();
    $db = $database -> connect();

    // Instantiate Stats
    $stat = new Stat($db);


    // Item Query
    $result = $stat -> read();
    // Get number of rows
    $num = $result -> rowCount();

    // check if there are items
    if ($num > 0) {
        // Item Array
        $stat_arr = array();
        $stat_arr['data'] = array();

        while ($row = $result -> fetch(PDO::FETCH_ASSOC)) {
            extract($row);

            $row_item = array(
                'Country' => $Country,
                'Total_Cases' => $Total_Cases,
                'New_Cases' => $New_Cases,
                'Total_Deaths' => $Total_Deaths,
                'New_Deaths' => $New_Deaths,
                'Total_Recovered' => $Total_Recovered,
                'Active_Cases' => $Active_Cases,
                'Serious_Critical' => $Serious_Critical,
                'TotCasesOf1MilPop' => $TotCasesOf1MilPop
            );
            // Push to data array
            array_push($stat_arr['data'], $row_item);
        }
        // Turn to JSON, output
        echo json_encode($stat_arr);

    } else {
        // No items
        echo json_encode(
            json_decode("{}")
        );
    }
?>