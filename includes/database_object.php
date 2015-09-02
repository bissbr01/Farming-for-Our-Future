<?php 
require_once(LIB_PATH.DS."database.php");

class DatabaseObject {
  protected static $table_name;
  protected static $db_fields = [];
  


	# late static binding : use 'static' instead of 'self' or .get_called_class()

	public static function find_all() {
		return static::find_by_sql("SELECT * FROM " . static::$table_name);
  }
  
 	public static function find_by_id($id=0) {
    	$result_array = static::find_by_sql("SELECT * FROM ".static::$table_name . " WHERE id={$id} LIMIT 1");
		return !empty($result_array) ? array_shift($result_array) : false;
  }
  
	public static function find_by_sql($sql="") {
	    global $database;
	    $result_set = $database->query($sql);
	    $object_array = [];
	    while ($row = $database->fetch_array($result_set)) {
	      $object_array[] = static::instantiate($row);
	    }
	    return $object_array;
  }

  protected static function instantiate($record) {
		// Could check that $record exists and is an array
    	$object = new static;
		// Simple, long-form approach:
		// $object->id 				= $record['id'];
		// $object->username 	= $record['username'];
		// $object->password 	= $record['password'];
		// $object->first_name = $record['first_name'];
		// $object->last_name 	= $record['last_name'];
		
		// More dynamic, short-form approach:
		foreach($record as $attribute=>$value){
		  if($object->has_attribute($attribute)) {
		    $object->$attribute = $value;
		  }
		}
		return $object;
  }
	
	public function has_attribute($attribute) {
	  // get_object_vars returns an associative array with all attributes 
	  // (incl. private ones!) as the keys and their current values as the value
    $object = new static;
	  $object_vars = get_object_vars($object);
	  // We don't care about the value, we just want to know if the key exists
	  // Will return true or false
	  return array_key_exists($attribute, $object_vars);
	}

  /**
   * Finds object attributes
   * @return array of attributes
   */
  protected function attributes(){
    // get_object_vars returns private protected attributes!
    // and attributes that don't have corresponding database fields
    $attributes = [];
    foreach (static::$db_fields as $field) {
      if(property_exists($this, $field)){
        $attributes[$field] = $this->$field;
      }
    }
    return $attributes;
  }

/**
 * escapes object attributes
 * @return array of MySQL safe attributes
 */
  public function escaped_attributes(){
    global $database;
    $clean_attributes = array();
    foreach ($this->attributes() as $key => $value) {
      $clean_attributes[$key] = $database->escape_value($value);  
    }
    return $clean_attributes;
  }

	public function create(){
		global $database;
    $attributes = $this->escaped_attributes();
    array_shift($attributes);  // removes 'id' field which is autoincrememnted

    $sql  = "INSERT INTO " . static::$table_name . " (";
    $sql .= join(", ", array_keys($attributes));
    $sql .= ") VALUES ('";
    $sql .= join("', '", array_values($attributes));
    $sql .= "')";

    if($database->query($sql)){
      $this->id = $database->insert_id();
      return true;
    } else {
      return false;
    }
  }

  public function update(){
    global $database;
    $attributes = $this->escaped_attributes();
    $attribute_pairs = array();
    foreach($attributes as $key => $value){
      $attribute_pairs[] = "{$key} = '{$value}'";
    }

    $sql  = "UPDATE ". static::$table_name . " SET ";
    $sql .= join(", ", $attribute_pairs);
    $sql .= " WHERE id =" .   $database->escape_value($this->id);
    $database->query($sql);

    return ($database->affected_rows() == 1) ? true : false;
  }

  /**
     * if user exists, update; otherwise, create
     * @return boolean
     */  
  public function save() {
    // A new record won't have an id yet
    return isset($this->id) ? $this->update() : $this->create();
  }

  /**
   * delete user
   * @return boolean
   */
  public function delete(){
    global $database;
    $sql  = "DELETE FROM ". static::$table_name . " ";
    $sql .= "WHERE id=" . $this->id . " ";
    $sql .= "LIMIT 1";
    $database->query($sql);
    return ($database->affected_rows(1)) ? true : false;
  }

}


 ?>