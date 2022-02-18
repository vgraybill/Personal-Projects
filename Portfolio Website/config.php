<?php 
/**
 *  configure error display (production vs development)
 */

/* ------------------configure these variables----------------- */


define('DEBUG_MODE', false);
define('ROOT_DIR', '' );

//future login examples will use a database for this
define('CORRECT_USER', 'melissa');
define('CORRECT_PASSWORD', 'phprules');



/* -------------------------stop editing------------------------ */


/* DISPLAY ERRORS
On a development server
	error_reporting should be set to E_ALL value;
	display_errors should be set to 1
	log_errors could be set to 1

On a production server
	error_reporting should be set to E_ALL value;
	display_errors should be set to 0
	log_errors should be set to 1
*/
if(DEBUG_MODE){
	//development
	error_reporting(E_ALL);
	ini_set('display_errors', 1);
	ini_set('log_errors', 1);
}else{
	//production
	ini_set('display_errors', 0);
	ini_set('log_errors', 1);
}
