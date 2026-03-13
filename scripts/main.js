import "./variables.js";
import "./GestionLocalStorage.js";

// function redirectionDashboard(){
//     window.location.href = "dashboard.html";
// }

// variables du site Web

let navBar = document.querySelector(".navBar");
let deuxiemeCoteNavBar = document.querySelector(".deuxiemeCoteNavBar");
deuxiemeCoteNavBar.style.postion = "relative";
let presentationLifePlannerSection = document.getElementById("presentationLifePlanner");


/* Si il n'y a pas de sessionId */
if(localStorage.getItem("sessionId") == null)
{
    console.log("Y'a pas d'id de session");
    // on créé un élément avec comme contenu "Se connecter"
    let seConnecterElement = document.createElement("p");
    seConnecterElement.textContent = "Se connecter";
    deuxiemeCoteNavBar.appendChild(seConnecterElement);
    // si la souris est au dessus de l'élément "se connecter"
    seConnecterElement.addEventListener("click", () => 
        {
            let formulaire = document.createElement("div");
            formulaire.classList.add("formulaire");
            presentationLifePlannerSection.appendChild(formulaire);
            let seConnecter = document.createElement("p");
            seConnecter.textContent = "Se connecter";
            seConnecter.style.position = "absolute";
            formulaire.appendChild(seConnecter);
        });
}



// créer un compte

function creerCompteLocalStorage()
{
    let donnees = [];
    
}

class gestionLocalStorage{
    #donnees = [];
    constructor(donnees)
    {
        creerCompteLocalStorage(donnees)
        {
            localStorage.setItem("session", "1234");
        }

        recupererDonneesConnexion()
        {
            donnees = []; // [0] = adresseEmailValeur, [1] motDePasseValeur, [2] motDePasseValeur2
            adresseEmailValeur = adresseEmailInput.value;
            motDePasseValeur = motDePasseInput.value;
            motDePasseValeur2 = motDePasseInput2.value;
            donneesPourBoucle = [adresseEmailValeur, motDePasseValeur, motDePasseValeur2];

            for(let i = 0 ; i < 3 ; i++)
            {
                donnees.push(donneesPourBoucle[i]);
            }
            return donnees;
        }

    }

}