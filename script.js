/* 
 * Fichier js créé par Sacha MARQUES
 * Date de création : Janvier 2025
 * Licence : MIT
 * Ce fichier utilise des éléments générés avec ChatGPT (IA).
 * Ce fichier contient du code écrit à la main.
 */


document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Vérifier si le mode sombre est activé
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
    }

    // Changement de mode au clic
    themeToggle.addEventListener('click', function () {
        if (body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        } else {
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        }
    });
});



 // Fonction pour ouvrir la modale avec des liens spécifiques
 function openModal(element) {
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modal-title");
    const linksList = document.getElementById("links-list");

    // Afficher la modale
    modal.style.display = "block";
}


window.onload = function() {
    const textElement = document.getElementById('animatedText');
    const textContent = textElement.textContent.trim(); // Récupérer le texte et enlever les espaces inutiles
    textElement.textContent = ''; // On vide le texte initial

    function writeText(callback) {
        let index = 0;
        function addLetter() {
            if (index < textContent.length) {
                textElement.textContent += textContent[index]; // Ajoute une lettre
                index++;
                setTimeout(addLetter, 100); // Vitesse d'apparition (100ms par lettre)
            } else {
                setTimeout(callback, 2000); // Pause de 2 secondes avant d'effacer
            }
        }
        addLetter();
    }

    function eraseText(callback) {
        let index = textContent.length;
        function removeLetter() {
            if (index > 0) {
                textElement.textContent = textContent.substring(0, index - 1); // Supprime une lettre
                index--;
                setTimeout(removeLetter, 100); // Vitesse de suppression (100ms par lettre)
            } else {
                setTimeout(callback, 500); // Petite pause avant de recommencer
            }
        }
        removeLetter();
    }

    function startAnimation() {
        writeText(() => {
            eraseText(startAnimation); // Une fois effacé, on recommence
        });
    }

    startAnimation(); // Lancer l'animation
};



document.addEventListener("DOMContentLoaded", function () {
    const stageItems = document.querySelectorAll("#stages .stage-item");

    function revealStages() {
        stageItems.forEach((item) => {
            if (item.getBoundingClientRect().top < window.innerHeight - 100) {
                item.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", revealStages);
    revealStages(); // Pour révéler les éléments visibles au chargement
});


function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('open');
    document.getElementById('overlay').classList.toggle('show');
}


document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let mailtoLink = `mailto:tonemail@example.com?subject=Message de ${name}&body=${message}%0A%0ADe: ${email}`;
    window.location.href = mailtoLink;
});

