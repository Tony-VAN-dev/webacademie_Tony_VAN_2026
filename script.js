function redirectionDashboard(){
    window.location.href = "dashboard.html";
}

// 
// let navBar = document.querySelector(".navBar");
// let deuxiemeCoteNavBar = document.querySelector(".deuxiemeCoteNavBar");
// deuxiemeCoteNavBar.style.postion = "relative";


// if(localStorage.getItem("sessionId") == null)
// {
//     console.log("Y'a pas d'id de session");
//     // on créé un élément avec comme contenu "Se connecter"
//     let seConnecterElement = document.createElement("p");
//     seConnecterElement.textContent = "Se connecter";
//     deuxiemeCoteNavBar.appendChild(seConnecterElement);
//     // si la souris est au dessus de l'élément "se connecter"
//     seConnecterElement.addEventListener("click", () => 
//         {
//             let seConnecter = document.createElement("p");
//             seConnecter.textContent = "Se connecter";
//             seConnecter.style.position = "absolute";
//             deuxiemeCoteNavBar.appendChild(seConnecter);
//         });
// }

// variables
let adresseEmailInput = document.getElementById("adresseEmail");
let boutonConnexion = document.getElementById("boutonConnexion");

    boutonConnexion.addEventListener("click", () => 
    {
        recupererDonneesConnexion();
    });

// quand on appuie sur le bouton pour se connecter
function recupererDonneesConnexion(){
    adresseEmailInput.value
}

//vérifier session après click bouton de connexion
function verifierSessionId()
{
    if(localStorage.getItem("sessionId") == null)
    {
        //il faut récupérer les données
    }
}
