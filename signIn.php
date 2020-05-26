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

function check_exst_s_up($type="all",$date){

    if($type == "all"){

        $re = [0,0,0,0];

        $key = get_key("accounts");
        for ($i=1; $i != 5; $i++) { 
            
            $a = "SELECT ".$key[$i]." FROM accounts where ".$key[$i]." = '{$date[$i-1]}' ";
            $temp = read_data($a);
            if(len($temp) != 0){
                $re[$i-1] = 1;
            }
        }
    }
    //$a = "SELECT * FROM main_events where event_date = '{$Date}' "

    return $re;
}

if ((isset($_POST))) {


    $name = $_POST['name_'];
    $us_name = $_POST['us_name_'];
    $email_ = $_POST['email_'];
    $phon_ = $_POST['phon_'];
    $password = $_POST['password_'];


    $name_ = str_replace(" ","_",$name);
    $us_name_ = str_replace(" ","_",$us_name);
    $password_ = str_replace(" ","_",$password);

    $re = check_exst_s_up($type="all",[$name_,$us_name_,$email_,$phon_]);

    //print_r($re);
    $next = 1;
    for ($i=0; $i != 4; $i++) { 
        if ($re[$i] == 1) {
            $next = 0;
        }
    }
    echo $next;

    $temp = insert("accounts ( `Name`, `User_Name`, `Email`, `Phone`, `password`) ",[$name_,$us_name_,$email_,$phon_,$password_]);
    $INIT =  mysqli_connect("localhost","pain","pain","linkUp");
    $output = mysqli_query( $INIT , $temp);
    
    if (isset($output)) {
        echo "ok";
    }else{
        echo "no";
    }






}

?>