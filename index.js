document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const cardContainer = document.getElementById('cardContainer');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const website = document.getElementById('website').value;
        const gender = document.querySelector('input[name="male-female"]:checked').value;
        const skills = [];
        const checkboxes = document.querySelectorAll('.checkbox:checked');
        checkboxes.forEach(function (checkbox) {
            skills.push(checkbox.value);
        });

        const studentData = {
            name: name,
            email: email,
            website: website,
            gender: gender,
            skills: skills
        };

        displayStudentData(studentData);
    });

    function displayStudentData(data) {
        const card = document.createElement('div');
        card.classList.add('card');

        const heading = document.createElement('h3');
        heading.textContent = data.name;

        const emailPara = document.createElement('p');
        emailPara.textContent = 'Email: ' + data.email;

        const websitePara = document.createElement('p');
        websitePara.textContent = 'Website: ' + data.website;

        const genderPara = document.createElement('p');
        genderPara.textContent = 'Gender: ' + data.gender;

        const skillsPara = document.createElement('p');
        skillsPara.textContent = 'Skills: ' + data.skills.join(', ');

        card.appendChild(heading);
        card.appendChild(emailPara);
        card.appendChild(websitePara);
        card.appendChild(genderPara);
        card.appendChild(skillsPara);

        cardContainer.appendChild(card);
    }
});

