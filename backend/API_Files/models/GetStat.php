<?php
    class Stat {
        // DB stuff
        private $conn;
        private $table = 'tbl_OutbreakTotals';

        // Table Columns
        public $infected;
        public $dead;
        public $cured;
        public $date;

        // Constructor
        public function __construct($db) {
            $this -> conn = $db;
        }

        // Get Database Rows
        public function read() {
            // Create Query
            $query = "SELECT *
                FROM {$this -> table}
                ORDER BY date DESC
                LIMIT 1;";
            

            // Prepare Query Statement
            $stmt = $this -> conn -> prepare($query);
            
            // Execute Query
            $stmt -> execute();

            return $stmt;
        }
    }
?>