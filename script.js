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
let motDePasseInput = document.getElementById("motDePasse");
let motDePasseInput2 = document.getElementById("motDePasse2");
let boutonConnexion = document.getElementById("boutonConnexion");

    boutonConnexion.addEventListener("click", () => 
    {
        let donnees = recupererDonneesConnexion();

    });

// quand on appuie sur le bouton pour se connecter
function recupererDonneesConnexion(){
    let donnees = []; // [0] = adresseEmailValeur, [1] motDePasseValeur, [2] motDePasseValeur2
    let adresseEmailValeur = adresseEmailInput.value;
    let motDePasseValeur = motDePasseInput.value;
    let motDePasseValeur2 = motDePasseInput2.value;
    let donneesPourBoucle = [adresseEmailValeur, motDePasseValeur, motDePasseValeur2];

    for(let i = 0 ; i < 3 ; i++)
    {
        donnees.push(donneesPourBoucle[i]);
    }
    return donnees;
}
// vérification des données écrites dans la page de connexion
function verificationDesDonnees(donnees)
{
    // si le mot de passe est pareil que l'autre mot de passe écrit
    if(donnees[1] == donnees[2])
    {
        
    }

}
//vérifier session après click bouton de connexion
function verifierSessionId()
{
    //
    let donnees = ["","",""];
    // si il n'y a pas de sessionId stocké
    if(localStorage.getItem("sessionId") == null)
    {
        //il faut créer les données
        // localStorage.setItem("sessionId", "1234");
    }
}
