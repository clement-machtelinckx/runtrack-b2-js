<?php

function my_insert_student($email, $fullname, $gender, $grade, $birthdate) {
    // Remplacez les valeurs de connexion suivantes par les vôtres
    $servername = "localhost";
    $username = "root";
    $password = "Clement2203$";
    $dbname = "lp_official";

    try {
        $conn = new PDO("mysql:host=$servername;dbname=$dbname;charset=utf8", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        $sql = "INSERT INTO student (email, fullname, gender, grade, birthdate)
                VALUES (:email, :fullname, :gender, :grade, :birthdate)";

        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':email', $email);
        $stmt->bindParam(':fullname', $fullname);
        $stmt->bindParam(':gender', $gender);
        $stmt->bindParam(':grade', $grade);
        $stmt->bindParam(':birthdate', $birthdate);

        $stmt->execute();

        return 'success';
    } catch (PDOException $e) {
        echo "Error: " . $e->getMessage();
        return 'error';
    }
}

// Vérifier si le formulaire a été soumis
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST["student-mail"];
    $fullname = $_POST["student-fullname"];
    $gender = $_POST["student-gender"];
    $grade = $_POST["student-grade"];
    $birthdate = $_POST["student-birthdate"];

    $result = my_insert_student($email, $fullname, $gender, $grade, $birthdate);
    echo $result;
}

?>
