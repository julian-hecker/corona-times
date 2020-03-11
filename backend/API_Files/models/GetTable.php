<?php
    class Table {
        // DB stuff
        private $conn;
        private $table = 'tbl_Outbreak';

        // Table Columns
        public $country;
        public $infected;
        public $dead;
        public $continent;

        // Constructor
        public function __construct($db) {
            $this -> conn = $db;
        }

        // Get Database Rows
        public function read() {
            // Create Query
            $query = "SELECT
                    Country,
                    Infected,
                    Dead,
                    Continent
                FROM {$this -> table}
                ORDER BY Infected DESC;";

            // Prepare Query Statement
            $stmt = $this -> conn -> prepare($query);
            
            // Execute Query
            $stmt -> execute();

            return $stmt;
        }
    }
?>