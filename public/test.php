<?php
require_once("../includes/initialize.php");

// Load .csv datasets from NSDA to Mysql

// $dir = "C:\downloads\NASS";
// if(is_dir($dir)){
// 	$dir_array = scandir($dir);
// 	foreach($dir_array as $file) {
// 		if(stripos($file, '.') > 0) {
// 			uploadcsv($file, basename($file, ".csv"));
// 		}
// 	}
// }


function upload_csv($csv, $table_name){

	// Get list of tables
	global $db;
	$sql =  "SHOW TABLES FROM usda"; 
	$result_set = $db->query($sql);
	$tables = mysqli_fetch_assoc($result_set);
	
	// Find table that matches file basename
	foreach ($tables as $key => $name) {
		if ($name == $table_name){

			// Get list of columns in table
			$sql1  = "SHOW COLUMNS FROM $table_name";
			$result_set = $db->query($sql1);
			$columns = mysqli_fetch_all($result_set, MYSQLI_ASSOC);

			// Find column names
			if (!empty($columns)) {
				echo "found columns: ";
				echo "<pre>";
				print_r($columns);
				echo "</pre>";

				$column_list = "";
				foreach ($columns as $key => $array) {
					foreach ($array as $field => $value) {
						// save names in string
						if ($field == 'Field'){
							$column_list .= "$value ";
						}	
					}	
				}
			$col_names = implode(", ", preg_split("/[\s]+/", $column_list));
			echo "<br>" . $col_names . "<br>";

			// import .csv into table with matching column names
			$sql =  "LOAD DATA LOCAL INFILE $csv";
			$sql .= " INTO TABLE $table_name";
			$sql .= " FIELDS TERMINATED BY ','";
			$sql .= " ENCLOSED BY " . '"';
			$sql .= " LINES TERMINATED BY '\r\n'";
			$sql .= " IGNORE 1 LINES";
			$sql .= " ($col_names)";

			return $db->query($sql) ? true : false;
			}
		}
	}
	return false;  //never found match
}

upload_csv("C:\downloads\NASS\asd.csv", "asd");
?>