
document.getElementById('form-add-student').addEventListener('submit', function (event) {
    event.preventDefault(); // Empêcher la soumission du formulaire par défaut
    myRegisterStudent(this);
});

function myRegisterStudent(form) {
    // Récupérer les valeurs des champs du formulaire
    const email = document.getElementById('student-mail').value;
    const fullname = document.getElementById('student-fullname').value;
    const gender = document.getElementById('student-gender').value;
    const grade = document.getElementById('student-grade').value;
    const birthdate = document.getElementById('student-birthdate').value;

    // Créer un objet FormData pour envoyer les données
    const formData = new FormData();
    formData.append('student-mail', email);
    formData.append('student-fullname', fullname);
    formData.append('student-gender', gender);
    formData.append('student-grade', grade);
    formData.append('student-birthdate', birthdate);

    // Envoyer les données via une requête AJAX à request.php
    fetch('request.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        if (data === 'success') {
            alert('Student registered successfully!');
        } else {
            alert('An error occurred. Please try again.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
