<?php
    if(isset($_POST['registerbtn'])){
        echo $_POST['firstName'];
        echo "<br>";
        echo $_POST['lastName'];
        echo "<br>";
        echo $_POST['password'];
        echo "<br>";
        echo $_POST['retypePassword'];
    }
?>