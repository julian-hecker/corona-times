<?php
    // Headers
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');

    include_once '../config/Database.php';
    include_once '../models/GetStat.php';

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
                'infected' => $Infected,
                'dead' => $Dead,
                'cured' => $Cured,
                'date' => $Date
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