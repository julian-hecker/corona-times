<?php
    class Table {
        // DB stuff
        private $conn;
        private $table = 'tbl_OutbreakDetailed';

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
            $query = "SELECT
                    Country,
                    Total_Cases,
                    New_Cases,
                    Total_Deaths,
                    New_Deaths,
                    Total_Recovered,
                    Active_Cases,
                    Serious_Critical,
                    TotCasesOf1MilPop
                FROM {$this -> table}
                WHere Country != 'total:'
                ORDER BY Total_Cases DESC;";

            // Prepare Query Statement
            $stmt = $this -> conn -> prepare($query);
            
            // Execute Query
            $stmt -> execute();

            return $stmt;
        }
    }
?>