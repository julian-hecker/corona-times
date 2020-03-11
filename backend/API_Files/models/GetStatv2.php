<?php
    class Stat {
        // DB stuff
        private $conn;
        private $table = 'tbl_OutbreakDetailedTotals';

        // Table Columns
        public $country;
        public $total_cases;
        public $new_cases;
        public $total_deaths;
        public $new_deaths;
        public $total_recovered;
        public $active_cases;
        public $serious_critical;
        public $total_case_of_1mil_pop;

        // Constructor
        public function __construct($db) {
            $this -> conn = $db;
        }

        // Get Database Rows
        public function read() {
            // Create Query
            $query = "SELECT *
                FROM {$this -> table}
                ORDER BY Date DESC
                LIMIT 1;";
            

            // Prepare Query Statement
            $stmt = $this -> conn -> prepare($query);
            
            // Execute Query
            $stmt -> execute();

            return $stmt;
        }
    }
?>