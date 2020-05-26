<?php

require("./php/functions.php");
require("./php/python_php.php");
require("./php/sql_include.php");


function get_key($tabel){

    $INIT =  mysqli_connect("localhost","pain","pain","linkUp");


   $Q = "SELECT * FROM {$tabel}";
   $to = mysqli_query($INIT,$Q);
   $t = mysqli_fetch_assoc($to);

   return array_keys($t);

}


function read_data($query){

   $Result = [];

   $INIT =  mysqli_connect("localhost","pain","pain","linkUp");

   if ($result = mysqli_query($INIT, $query)) {
       while ($row = mysqli_fetch_row($result)) {

           array_push($Result,$row);
       }

       mysqli_free_result($result);
   }

   return $Result;
}

if ((isset($_POST))) {

    

    $year = $_POST['year'];

    $key = get_key("main_events");
    $loc =  read_data("SELECT loc FROM download_mage where year = '{$year}' ");
    if (len($loc) != 0){

        $loc = str_replace("_"," ",$loc[0][0]);
        $loc = str_replace("*","_",$loc);
        print_r($loc);

    }else{
        echo "error";
    }



}





?>