import {GestionLocalStorage} from "./GestionLocalStorage.js";

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
    // on créé un élément avec comme contenu "Mon compte"
    let monCompteElement = document.createElement("p");
    monCompteElement.textContent = "Mon compte";
    deuxiemeCoteNavBar.appendChild(monCompteElement);
    // si la souris est au dessus de l'élément "Mon compte"
    monCompteElement.addEventListener("click", () => 
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
    inputEmail.setAttribute("id", "adresseEmail");
    // mot de passe
    let labelMdp = document.createElement("label");
    labelMdp.textContent = "Entrez votre mot de passe";
    let inputMdp = document.createElement("input");
    inputMdp.setAttribute("type","password");
    inputMdp.setAttribute("id", "motDePasse");
    inputMdp.style.display = "block";
    
    // mot de passe 2
    let inputMdp2 = document.createElement("input");
    inputMdp2.setAttribute("type","password");
    inputMdp2.setAttribute("id", "motDePasse2");
    inputMdp2.style.display = "block";
    // div creerEtConnecterCompte
    let divCreerEtConnecterCompte = document.createElement("div");

    // créer un compte
    let creerUnCompte = document.createElement("p");
    creerUnCompte.textContent = "Créer votre compte";
    //si on clique sur Créer votre compte
    creerUnCompte.addEventListener("click", ()=>
    {
        // variables
        let adresseEmailInput = document.getElementById("adresseEmail");
        let motDePasseInput = document.getElementById("motDePasse");
        let motDePasseInput2 = document.getElementById("motDePasse2");

        let donneesInput = [adresseEmailInput,motDePasseInput,motDePasseInput2];
        let GestionLocalStorageInstance = new GestionLocalStorage(donneesInput);
        GestionLocalStorageInstance.creerUnCompte();
    });
    // se connecter
    let seConnecter = document.createElement("button");
    seConnecter.textContent = "Se connecter";
    // seConnecter.style.position = "absolute";
    seConnecter.style.textAlign = "left";
    //si on clique sur Se connecter
    seConnecter.addEventListener("click",(e)=>{
        // variables
        let adresseEmailInput = document.getElementById("adresseEmail");
        let motDePasseInput = document.getElementById("motDePasse");
        let motDePasseInput2 = document.getElementById("motDePasse2");

        let donneesInput = [adresseEmailInput,motDePasseInput,motDePasseInput2];
        let GestionLocalStorageInstance = new GestionLocalStorage(donneesInput);
        GestionLocalStorageInstance.seConnecterCompte();
    });

    // ajouts d'enfants au formulaire
    
    let tableauEnfants_a_ajouter = [
    labelEmail,
    inputEmail,
    labelMdp,
    inputMdp,
    inputMdp2,
    divCreerEtConnecterCompte
    ];

    tableauEnfants_a_ajouter.forEach((e) =>
    {
        formulaire.appendChild(e);
        console.log(e);
    });
    
    //tableau d'enfants de la div de création et de connexion à son compte
    let tableauEnfantsCreerEtConnecterCompte = [creerUnCompte,seConnecter];
    tableauEnfantsCreerEtConnecterCompte.forEach((e) =>
    {
        divCreerEtConnecterCompte.appendChild(e); // ajout d'enfants à la div
    });
    //divCreerEtConnecterCompte
    divCreerEtConnecterCompte.classList.add("divCreerEtConnecterCompte")
    divCreerEtConnecterCompte.addEventListener("click",(e)=>
    {
        
    });
    return formulaire;
}

function creerLienDashboard()
{
    if(localStorage.getItem("sessionId") !== null)
    {
        let dashboardLien = document.createElement("a");
        dashboardLien.setAttribute("href","dashboard.html");
        dashboardLien.textContent = "Dashboard";
        deuxiemeCoteNavBar.appendChild(dashboardLien);

    }
}

let formulaire = creerformulaire();
creerLienDashboard();
// console.log("les donnees sont : " + GestionLocalStorageInstance.getDonnees());