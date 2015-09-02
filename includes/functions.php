<?php

function strip_zeros_from_date( $marked_string="" ) {
  // first remove the marked zeros
  $no_zeros = str_replace('*0', '', $marked_string);
  // then remove any remaining marks
  $cleaned_string = str_replace('*', '', $no_zeros);
  return $cleaned_string;
}

function redirect_to( $location = NULL ) {
  if ($location != NULL) {
    header("Location: {$location}");
    exit;
  }
}

function output_message($message="") {
  if (!empty($message)) { 
    return "<p class=\"message\">{$message}</p>";
  } else {
    return "";
  }
}

function __autoload($class_name) {
	$class_name = strtolower($class_name);
  $path = "../includes/{$class_name}.php";
  if(file_exists($path)) {
    require_once($path);
  } else {
		die("The file {$class_name}.php could not be found.");
	}
}

function include_layout_template($template=""){
  include(SITE_ROOT.DS.'public'.DS.'layouts'.DS.$template);
}

  /**
   * creates log file 
   * @param string $action 
   * @param string $message 
   * @return empty string on success , err message on failure 
   */
function log_action($action = "", $message=""){
  $log  = SITE_ROOT.DS.'logs'.DS.'log.txt';
  $date = strftime('%Y/%m/%d/ %H:%M:%S', time()); 
  $text = $date . ' | ' . $action . " : " . $message . "\n";
  if ($size = file_put_contents($log, $text, FILE_APPEND)){
    return '';
  } else {
    output_message("File could not be written to.");
  }

}

?>