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
let creerPageTacheBouton = document.getElementById("creerPageTachesBouton");
creerPageTacheBouton.addEventListener("click", (e)=>
{
    // div page tache
    let divPageTache = document.createElement("div");
    divPageTache.classList.add("blocTache");
    //créer tache bouton
    let creerTacheBouton = document.createElement("button");
    creerPageTacheBouton.textContent = "Créer une tâche";
    creerTacheBouton.addEventListener("click", (e)=>
    {
        // let document.createElement("select");
        let tacheTexte = document.createElement("p");
        let boutonModifierTache = document.createElement("button");
        boutonModifierTache.addEventListener("click", (e)=>
        {
            // il faut stocker la tâche dans localStorage
            

        })
    });  
    
});

function affichageTaches()
{
    
}