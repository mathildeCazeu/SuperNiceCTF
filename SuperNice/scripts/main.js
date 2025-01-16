// Fonction pour rediriger vers une autre page
function redirectToPage() {
    window.location.href = "key.html";
}

// Fonction pour placer les carrés cliquables de manière aléatoire
function placeClickableSquares() {
    const numberOfSquares = 5; // Nombre de carrés cliquables
    const links = [
        { href: "rick.html" },
        { href: "verdo.html"},
        { href: "bibliotheque.html"},
        { href: "manymanymanylinks.html"},
        { href: "downtherabbithole.html"}
    ];

    for (let i = 0; i < numberOfSquares; i++) {
        const square = document.createElement('a');
        square.className = 'clickable-square';
        square.href = links[i].href;
        square.textContent = links[i].text;

        // Position aléatoire
        const x = Math.random() * (window.innerWidth - 100); // -100 pour éviter le débordement
        const y = Math.random() * (window.innerHeight - 100);
        square.style.left = `${x}px`;
        square.style.top = `${y}px`;

        document.body.appendChild(square);
    }
}

// ----------Déso mais pour le jeu, regarde pas ici -------------
/*LE MOT DE PASSE EST LA ALORS REGARDE PAS STP SOIT COOL*/
function extractKey(fullString) {
    const validKey = fullString.split('=')[0] + '=';
    return validKey;
}

// Fonction pour valider la clé
function validateKey(event) {
    event.preventDefault(); // Empêcher le rechargement de la page
    const keyInput = document.getElementById('keyInput').value;
    const message = document.getElementById('message');

    // Chaîne longue contenant la clé valide
    const fullString = "N3g5RnFXM1J0WThVMXBMMktqNE0=dsd4s54d5z4eaz4";

    // Extraire la clé valide
    const correctKey = extractKey(fullString);

    if (keyInput === correctKey) {
        window.location.href = "trofor.html";
    } else {
        message.textContent = "C'est cringe :/ T'as pensé à modifier un peu la clé ?";
        message.style.color = "#ff0000"; // Rouge pour indiquer l'échec
    }
}

// Placer les carrés cliquables au chargement de la page
window.onload = placeClickableSquares;
