<?php
      $name = $_GET["sname"];
   
     
     $db = mysqli_connect("localhost:3306","root","");
     mysqli_select_db($db,"student");
     mysqli_query($db, "set names utf8");
     $sql = "insert into studentnifo sname values '$name' ";
    $result = mysqli_query($db,$sql);
     if($result){
         echo  "<script>alert('注册成功');location.href='zhuce.html'</script>";

     }else{
        echo  "<script>alert('注册失败');location.href='mima.html'</script>";
     }

?>