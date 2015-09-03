<?php
// require_once("../includes/initialize.php");

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


// function upload_csv($csv, $table_name){

// 	// Get list of tables
// 	global $db;
// 	$sql =  "SHOW TABLES FROM usda"; 
// 	$result_set = $db->query($sql);
// 	$tables = mysqli_fetch_assoc($result_set);
	
// 	// Find table that matches file basename
// 	foreach ($tables as $key => $name) {
// 		if ($name == $table_name){

// 			// Get list of columns in table
// 			$sql1  = "SHOW COLUMNS FROM $table_name";
// 			$result_set = $db->query($sql1);
// 			$columns = mysqli_fetch_all($result_set, MYSQLI_ASSOC);

// 			// Find column names
// 			if (!empty($columns)) {
// 				echo "found columns: ";
// 				echo "<pre>";
// 				print_r($columns);
// 				echo "</pre>";

// 				$column_list = "";
// 				foreach ($columns as $key => $array) {
// 					foreach ($array as $field => $value) {
// 						// save names in string
// 						if ($field == 'Field'){
// 							$column_list .= "$value ";
// 						}	
// 					}	
// 				}
// 			$col_names = implode(", ", preg_split("/[\s]+/", $column_list));
// 			echo "<br>" . $col_names . "<br>";

// 			// import .csv into table with matching column names
// 			$sql =  "LOAD DATA LOCAL INFILE $csv";
// 			$sql .= " INTO TABLE $table_name";
// 			$sql .= " FIELDS TERMINATED BY ','";
// 			$sql .= " ENCLOSED BY " . '"';
// 			$sql .= " LINES TERMINATED BY '\r\n'";
// 			$sql .= " IGNORE 1 LINES";
// 			$sql .= " ($col_names)";

// 			return $db->query($sql) ? true : false;
// 			}
// 		}
// 	}
// 	return false;  //never found match
// }

// upload_csv("C:\downloads\NASS\asd.csv", "asd");

// $text = '{"data":[{"source_desc":"CENSUS","sector_desc":"ANIMALS & PRODUCTS","group_desc":"ANIMAL TOTALS","commodity_desc":"ANIMAL TOTALS","class_desc":"ANIMALS ONLY","prodn_practice_desc":"ORGANIC","util_practice_desc":"ALL UTILIZATION PRACTICES","statisticcat_desc":"SALES","unit_desc":"$","domain_desc":"ORGANIC STATUS","domaincat_desc":"ORGANIC STATUS: (NOP STANDARDS)","data_item":"ANIMAL TOTALS,ALL UTILIZATION PRACTICES,ORGANIC,ANIMALS ONLY,$,SALES","agg_level_desc":"STATE","state_ansi":"01","state_fips_code":"01","state_alpha":"AL","state_name":"ALABAMA","asd_code":null,"asd_desc":null,"county_ansi":null,"county_code":null,"county_name":null,"region_desc":"","zip_5":"","watershed_code":"00000000","watershed_desc":"","congr_district_code":"","country_code":"9000","country_name":"UNITED STATES","location_desc":"ALABAMA","year":"2007","freq_desc":"ANNUAL","begin_code":"00","end_code":"00","reference_period_desc":"YEAR","week_ending":"","load_time":"2012-01-01 00:00:00","value":"513,000","CV":""},{"source_desc":"CENSUS","sector_desc":"ANIMALS & PRODUCTS","group_desc":"ANIMAL TOTALS","commodity_desc":"ANIMAL TOTALS","class_desc":"ANIMALS ONLY","prodn_practice_desc":"ORGANIC","util_practice_desc":"ALL UTILIZATION PRACTICES","statisticcat_desc":"SALES","unit_desc":"OPERATIONS","domain_desc":"ORGANIC STATUS","domaincat_desc":"ORGANIC STATUS: (NOP STANDARDS)","data_item":"ANIMAL TOTALS,ALL UTILIZATION PRACTICES,ORGANIC,ANIMALS ONLY,OPERATIONS,SALES","agg_level_desc":"STATE","state_ansi":"01","state_fips_code":"01","state_alpha":"AL","state_name":"ALABAMA","asd_code":null,"asd_desc":null,"county_ansi":null,"county_code":null,"county_name":null,"region_desc":"","zip_5":"","watershed_code":"00000000","watershed_desc":"","congr_district_code":"","country_code":"9000","country_name":"UNITED STATES","location_desc":"ALABAMA","year":"2007","freq_desc":"ANNUAL","begin_code":"00","end_code":"00","reference_period_desc":"YEAR","week_ending":"","load_time":"2012-01-01 00:00:00","value":"14","CV":""}]}';
// echo "<pre>";
// echo $text;
// echo "</pre>"
?>

<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title></title>
	<link rel="stylesheet" href="">
</head>
<body>
	
</body>
<script src="data_test.js">
	
</script>
</html>