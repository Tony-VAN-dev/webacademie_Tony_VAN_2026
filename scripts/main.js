import "./variables.js";
import "./GestionLocalStorage.js";

// function redirectionDashboard(){
//     window.location.href = "dashboard.html";
// }

// variables du site Web

let navBar = document.querySelector(".navBar");
let deuxiemeCoteNavBar = document.querySelector(".deuxiemeCoteNavBar");
deuxiemeCoteNavBar.style.position = "relative";
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
            console.log(formulaire);
            formulaire.classList.toggle("hidden");
        });
}

function creerformulaire()
{
    //formulaire
    let formulaire = document.createElement("div");
    formulaire.classList.add("formulaire");
    formulaire.classList.add("hidden");
    // presentationLifePlannerSection.appendChild(formulaire);
    document.body.appendChild(formulaire);



    // email
    let labelEmail = document.createElement("label");
    labelEmail.textContent = "Entrez votre adresse mail";
    let inputEmail = document.createElement("input");
    inputEmail.setAttribute("placeholder","Entrez votre adresse mail");
    // mot de passe
    let labelMdp = document.createElement("label");
    labelMdp.textContent = "Entrez votre mot de passe";
    let inputMdp = document.createElement("input");
    inputMdp.setAttribute("type","password");
    inputMdp.style.display = "block";
    
    // mot de passe
    let labelMdp2 = document.createElement("label");
    labelMdp2.textContent = "Entrez votre mot de passe";
    let inputMdp2 = document.createElement("input");
    inputMdp2.setAttribute("type","password");
    inputMdp2.style.display = "block";

    // se connecter
    let seConnecter = document.createElement("button");
    seConnecter.textContent = "Se connecter";
    seConnecter.style.position = "absolute";
    seConnecter.style.textAlign = "left";

    // ajouts d'enfants au formulaire
    
    let tableauEnfants_a_ajouter = [
    labelEmail,
    inputEmail,
    labelMdp,
    inputMdp,
    inputMdp2,
    seConnecter
    ];

    tableauEnfants_a_ajouter.forEach((e) =>
    {
        formulaire.appendChild(e);
        console.log(e);
    });

    return formulaire;
}

let formulaire = creerformulaire();