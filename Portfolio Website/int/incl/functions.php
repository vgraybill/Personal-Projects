<?php 
/**
 * Display feedback for form submission
 *
 * @param string $message the message to display
 * @param string $css_class the class to apply to the container - use error or success default is info
 * @param array $list The bullet list of issues to show
 * @return mixed HTML output
 */

function show_feedback( &$message, &$css_class = 'info', $list = array() ){

    if(isset($message)) {
    echo "<div class='$css_class' id='feedback'>";
    echo '<h4>' .$message. '</h4>';
    //if th list isn't empty, show it
    if (! empty($list)){
        echo '<ul>';
        foreach( $list AS $item){
            echo "<li>".$item."</li>";
        }
        echo '</ul>';
    }
    echo '</div>';
    }
}
/**
 * make dropdowns sticky
 *
 * @param mixed $a First thing
 * @param mixed $b Second thing
 * @return string The selected attribute
 */
function selected( $a, $b ){
    if ($a == $b){
        echo 'selected';
    }
}
function checked( $a, $b ){
    if ($a == $b){
        echo 'checked';
    }
}
/**
 * Highlight an HTML input if it enocunters an error
 *
 * @param string $key the name of the field that caused the issue
 * @param string $array the collection of errors from the form
 * @return 
 */
function field_error($key, $array) {
    if(array_key_exists($key, $array)){
        echo 'field-error';
    }
}
