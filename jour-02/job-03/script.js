// Récupérer les éléments HTML par leur ID
const textDisplayer = document.getElementById("text-displayer");
const inputText = document.getElementById("input-text");
const turnTextBold = document.getElementById("turn-text-bold");
const turnTextItalic = document.getElementById("turn-text-italic");
const clearText = document.getElementById("clear-text");

// Fonction pour afficher le texte de l'input dans le paragraphe
function myDisplayText() {
    textDisplayer.textContent = inputText.value;
}

// Fonction pour rendre le texte en gras
function myTurnBold() {
    textDisplayer.style.fontWeight = "bold";
}

// Fonction pour rendre le texte en italique
function myTurnItalic() {
    textDisplayer.style.fontStyle = "italic";
}

// Fonction pour effacer les effets appliqués au texte
function myClearText() {
    textDisplayer.textContent = ""; // Effacer le texte
    textDisplayer.style.fontWeight = "normal"; // Retirer le gras
    textDisplayer.style.fontStyle = "normal"; // Retirer l'italique
}

// Écouter les événements et déclencher les fonctions appropriées
inputText.addEventListener("input", myDisplayText);
turnTextBold.addEventListener("click", myTurnBold);
turnTextItalic.addEventListener("click", myTurnItalic);
clearText.addEventListener("click", myClearText);
