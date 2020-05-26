<?php


require("../php/functions.php");
require("../php/python_php.php");
require("../php/sql_include.php");


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

    $to_sql = [];
    

    $name = $_POST['name'];
    $name = str_replace(" ","_",$name);

    array_push($to_sql,$name);

    $Dataa = $_POST['Dataa'];
    array_push($to_sql,$Dataa);

    $init_time = $_POST['init_time'];
    $end_time = $_POST['end_time'];
    $temp = $init_time."-".$end_time;
    array_push($to_sql,$temp);

    $loc = $_POST['loc'];
    $loc = str_replace(" ","_",$loc);
    array_push($to_sql,$loc);

    $info = $_POST['info'];
    $info = str_replace(" ","_",$info);
    array_push($to_sql,$info);

    $q = "SELECT event_name_us,event_date_us,event_loc_us FROM user_add_event where event_name_us = '{$name}' and event_date_us = '{$Dataa}' and event_loc_us = '{$loc}';";
    $re = read_data($q);
    if(len($re)) {

        echo "this evenis ored exists";

    }else{
        
        $q = insert("user_add_event (`event_name_us`, `event_date_us`, `event_time_us`, `event_loc_us`, `event_info_us`) ",$to_sql);
        $INIT =  mysqli_connect("localhost","pain","pain","linkUp");
        $result = mysqli_query($INIT, $q);


        echo str_replace("_"," ",$name)." ,".str_replace("_"," ",$loc)." at ".str_replace("_"," ",$Dataa)." got it thxs, see u there";
    }

    
    //.$init_time.$end_time.$info;

}


?>