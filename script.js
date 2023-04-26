/* Dark mode */

const themeToggle = document.querySelector('#theme-toggle');
themeToggle.addEventListener('click', function () {

    const body = document.querySelector('body');
    body.classList.toggle('dark-mode');


    if (body.classList.contains('dark-mode')) {
        themeToggle.innerText = 'Mode clair';
    } else {
        themeToggle.innerText = 'Mode sombre';
    }
});

/* Animation img Index page */

// const imgTalk = document.querySelector('.imgTalk');

// const observer = new IntersectionObserver(entries => {

//     if (entries[0].isIntersecting) {

//         imgTalk.classList.add('appear');

//         observer.unobserve(imgTalk);
//     }
// });

// observer.observe(imgTalk);




// let rencontre = document.querySelector(".fa-sharp");
// let sous_menu = document.querySelector(".sous-menu")


// rencontre.addEventListener("click", () => {
//     if (getComputedStyle(sous_menu).display != "block") {
//         sous_menu.style.display = "block"; {
//         }
//     }
//     else {
//         sous_menu.style.display = "none";
//     }
// })

/* Filtres */
const btnFilter = document.querySelector('.btnFilter');

btnFilter.addEventListener('click', () => {
    console.log('Bouton Valider cliqué');
    // Récupérer les valeurs sélectionnées pour chaque filtre
    const selectedGender = document.querySelector('#gender').value;
    const selectedAge = Array.from(document.querySelectorAll('input[name="age"]:checked'))
        .map(checkbox => checkbox.value)
        .join(',');
    const selectedRelation = document.querySelector('#relation').value;

    // Construire l'URL de redirection avec les critères sélectionnés
    const url = selectedGender === "homme" ? `meetMen.html?gender=${selectedGender}&age=${selectedAge}&relation=${selectedRelation}` : `meetWomen.html?gender=${selectedGender}&age=${selectedAge}&relation=${selectedRelation}`;


    // Rediriger l'utilisateur vers la page meet.html avec les critères sélectionnés comme paramètres d'URL
    window.location.href = url;
});