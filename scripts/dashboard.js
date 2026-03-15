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
    // div page tache
    let divPageTache = document.createElement("div");
    divPageTache.classList.add("blocTache");
    //créer div blocTache
    let blocTache = document.createElement("div");
    blocTache.classList.add("blocTache");
    
    // .appendChild()
    // blocTache.appendChild(boutonModifierTache);
    let tachesPageTexte = document.createElement("p");
    tachesPageTexte.textContent = "Page de tâches";
    
    //blocTache (page de tâches)
    blocTache.appendChild(tachesPageTexte);
    blocTache.classList.add("tacheBloc")

    divPageTache.appendChild(blocTache);
    tachesBloc[0].appendChild(blocTache);

    //créer tache bouton
    let creerTacheBouton = document.createElement("button");
    creerTacheBouton.textContent = "Créer une tâche";


    creerTacheBouton.addEventListener("click", (e)=>
    {
        let tacheTexte = document.createElement("p");
        let boutonModifierTache = document.createElement("button");
        boutonModifierTache.addEventListener("click", (e)=>
        {
            // il faut stocker la tâche dans localStorage
            

        })
        
    });  
    
});

// function affichageTaches()
// {
    
// }