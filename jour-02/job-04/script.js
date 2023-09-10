
document.getElementById('form-add-student').addEventListener('submit', function (event) {
    event.preventDefault(); 
    myRegisterStudent(this);
});

function myRegisterStudent(form) {
    // Récupérer les valeurs des champs du formulaire
    const grade = document.getElementById('student-grade').value;
    const email = document.getElementById('student-mail').value;
    const fullname = document.getElementById('student-fullname').value;
    const birthdate = document.getElementById('student-birthdate').value;
    const gender = document.getElementById('student-gender').value;

    // Créer un objet FormData pour envoyer les données
    const formData = new FormData();
    formData.append('student-grade', grade);
    formData.append('student-mail', email);
    formData.append('student-fullname', fullname);
    formData.append('student-birthdate', birthdate);
    formData.append('student-gender', gender);


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
