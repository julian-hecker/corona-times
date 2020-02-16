<?php
    // Headers
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');

    include_once '../config/Database.php';
    include_once '../models/GetTable.php';

    // Instantiate & Connect DB
    $database = new Database();
    $db = $database -> connect();

    // Instantiate Item
    $table = new Table($db);


    // Item Query
    $result = $table -> read();
    // Get number of rows
    $num = $result -> rowCount();

    // check if there are items
    if ($num > 0) {
        // Table Array
        $table_arr = array();
        // create data: used to separate metadata and such
        $table_arr['data'] = array();

        while ($row = $result -> fetch(PDO::FETCH_ASSOC)) {
            extract($row);

            $row_item = array(
                'country' => $Country,
                'infected' => $Infected,
                'dead' => $Dead,
                'continent' => $Continent
            );
            // Push to data array
            array_push($table_arr['data'], $row_item);
        }
        // Turn to JSON, output
        echo json_encode($table_arr);

    } else {
        // No items
        echo json_encode(
            json_decode("{}")
        );
    }
?>