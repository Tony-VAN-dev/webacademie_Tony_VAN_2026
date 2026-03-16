function chercherUtilisateurParSessionId(tache)
{
    let sessionId = localStorage.getItem("sessionId");
    let utilisateurs = localStorage.getItem("utilisateurs");

    utilisateurs.forEach(e)
    {
        if(e.id == sessionId)
        {

        }
    }
}
//variables dashboard
let tachesBloc = document.getElementsByClassName("tachesBloc");
let creerPageTachesBouton = document.getElementById("creerPageTachesBouton");
creerPageTachesBouton.addEventListener("click", (e)=>
{
    console.log("Bouton cliqué");

    //créer div blocTache
    let blocTache = document.createElement("div");
    blocTache.classList.add("blocTache");
    
    let divTachesBlocEnDetails = document.createElement("div");
    divTachesBlocEnDetails.classList.add("tachesBlocEnDetails");

    // .appendChild()
    // blocTache.appendChild(boutonModifierTache);
    let tachesPageTexte = document.createElement("p");
    tachesPageTexte.textContent = "Page de tâches";
    
    //blocTache (page de tâches)
    blocTache.appendChild(tachesPageTexte);
    blocTache.appendChild(divTachesBlocEnDetails);
    // divTachesBlocEnDetails.appendChild(boutonModifierTache);
    blocTache.classList.add("tacheBloc")


    tachesBloc[0].appendChild(blocTache); // ajout de la page de taches dans la zone de tâches

    //créer tache bouton
    let creerTacheBouton = document.createElement("button");
    creerTacheBouton.textContent = "Créer une tâche";


    creerTacheBouton.addEventListener("click", (e)=>
    {
        let tacheTexte = document.createElement("p");
        tacheTexte.textContent = "Tâche";
        let blocDeChaqueTache = document.createElement("div");
        blocDeChaqueTache.classList.add("blocDeChaqueTache");

        let boutonModifierTache = document.createElement("button");
        boutonModifierTache.textContent = "Modifier";
        divTachesBlocEnDetails.appendChild(blocDeChaqueTache);
        divTachesBlocEnDetails.appendChild(boutonModifierTache);

        blocDeChaqueTache.appendChild(tacheTexte);
        blocDeChaqueTache.appendChild(boutonModifierTache);
        // si on modifie la tache
        boutonModifierTache.addEventListener("click", (e)=>
        {
            let inputModifierTache = document.createElement("input");
            console.log(tacheTexte);
            let tacheTexteValeur = tacheTexte.textContent;
            // tacheInput
            let tacheInput = document.createElement("input");
            tacheInput.style.width = "100px";
            tacheInput.setAttribute("value", tacheTexteValeur);
            console.log(tacheTexteValeur);

            blocDeChaqueTache.appendChild(tacheInput);
            //la tâche va disparaitre
            tacheTexte.style.display = "none";

            //le boutonModiferTache disparait
            boutonModifierTache.style.display = "none";
            
            //creation d'un nouveau bouton Modifier
            let nouveauBoutonModifier = document.createElement("button");
            nouveauBoutonModifier.textContent = "Modifier";
            blocDeChaqueTache.appendChild(nouveauBoutonModifier);
            //si on clique sur le nouveau bouton Modifier
            nouveauBoutonModifier.addEventListener("click",(e)=>
            {
                let tacheInputValeur = tacheInput.value;
                // la tâche sera modifié
                tacheTexte.textContent = tacheInputValeur;
                tacheInput.style.display = "none";
                tacheTexte.style.display = "block";
                nouveauBoutonModifier.style.display = "none";
                boutonModifierTache.style.display = "block";
            }
            );
        })
        
    });  
    blocTache.appendChild(creerTacheBouton);
    // divTachesBlocEnDetails.appendChild();
    // divTachesBlocEnDetails.appendChild(boutonModifierTache);

});

// function affichageTaches()
// {
    
// }