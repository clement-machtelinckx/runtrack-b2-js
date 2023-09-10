

<?php

error_reporting(E_ALL);
function my_insert_student($grade, $email, $fullname, $birthdate, $gender) {
    
    $servername = "localhost";
    $username = "root";
    $password = "Clement2203$";
    $dbname = "lp_official";

    try {
        $conn = new PDO("mysql:host=$servername;dbname=$dbname;charset=utf8", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        $sql = "INSERT INTO student (grade_id, email, fullname, birthdate, gender)
                VALUES (:grade, :email, :fullname, :birthdate, :gender)";

        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':grade_id', $grade);
        $stmt->bindParam(':email', $email);
        $stmt->bindParam(':fullname', $fullname);
        $stmt->bindParam(':birthdate', $birthdate);
        $stmt->bindParam(':gender', $gender);

        $stmt->execute();
        echo $grade;
        echo $email;
        return 'success';
    } catch (PDOException $e) {
        echo "Error: " . $e->getMessage();
        return 'error';
    }
}

// Vérifier si le formulaire a été soumis
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $grade = $_POST["student-grade"];
    $email = $_POST["student-mail"];
    $fullname = $_POST["student-fullname"];
    $birthdate = $_POST["student-birthdate"];
    $gender = $_POST["student-gender"];
    $result = my_insert_student($grade, $email, $fullname, $birthdate, $gender);
    echo $result;
}

?>
