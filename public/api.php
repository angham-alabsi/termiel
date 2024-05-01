<?php
/*
if(isset($_POST['userName'] && $_POST['email'] && $_POST['message'])){
    $connect = new PDO("mysql:host=localhost;dbname=solar", "root", "");
    $received_data = json_decode(file_get_contents("php://input",true));
    $data = array();
    return "aaaaaaaa";
}else{
    return "not";
}
//sdgshdfhhhhhhhhhhhhhhhhhhhh
/*$con=new mysqli('localhost','root','','solar');
if($con->connect_error){
    die("Connnection Failed !".$con->connect_error );
}
    //echo json_encode($result);
    //return "Success";
    //echo('Success');
    $result=array('error'=>false);
    $name=$_POST['userName'];
    $email=$_POST['email'];
    $message=$_POST['message'];
    $sql=$con->query('insert into email (name,email,message)value("$name","$email","message")');
    if($sql){
        $result['message']="message sent successfully";
    }else{
        $result['error']=true;
        $result['message']="Failed to send message ,Try again";
    }
    echo json_encode($result);*/

    

?>