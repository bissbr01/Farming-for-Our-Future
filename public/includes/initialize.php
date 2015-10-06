<?php 

// Directory_Separator is a PHP pre-defined constant
// (\ for Windows, / for Unix)

defined('DS') ? null : define('DS', DIRECTORY_SEPARATOR);
defined('SITE_ROOT') ? null : define('SITE_ROOT', 'C:'.DS.'Wamp'.DS.'www'.DS.'USDA_Project');
defined('LIB_PATH') ? null : define('LIB_PATH', SITE_ROOT.DS.'public'.DS.'includes');

require_once(LIB_PATH.DS.'getIP.php');
require_once(LIB_PATH.DS."geolocation.php");


 ?>