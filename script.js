function redirectionDashboard(){
    window.location.href = "dashboard.html";
}

// 
let deuxiemeCoteNavBar = document.querySelector(".deuxiemeCoteNavBar");

if(localStorage.getItem("sessionId") == null)
{
    console.log("Y'a pas d'id de session");
    // on créé un élément avec comme contenu "Se connecter"
    let seConnecterElement = document.createElement("p");
    seConnecterElement.textContent = "Se connecter";
    seConnecterElement.style.position = "absolute";
    deuxiemeCoteNavBar.appendChild(seConnecterElement);
}

