export class GestionLocalStorage{
    #donnees = [];

    constructor(donnees)
    {
        donnees.forEach((e)=>{
            this.#donnees.push(e);
        });
    }

    getDonneesUtilisateursLocalStorage()
    {
        let donnees = JSON.parse(localStorage.getItem("utilisateurs"));
        return donnees;
    }

    getDonnees(){
        // console.log("Données (getDonnees()" + JSON.parse(this.#donnees));
        return this.#donnees;
    }
    creerUnCompte() // fonction principale
    {
        // let donnees = 
        let donnees = this.getDonnees();
        // console.log("testtttttttttttt");

        this.creerTableauUtilisateurs();
        // let donnees = this.recupererDonneesInput();
        // if(this.verificationDesDonneesCreation(donnees))
        // {
        //     this.creerCompteLocalStorage(donnees);
        // }
            this.creerCompteLocalStorage(donnees);

        // this.verificationDesDonneesCreation(donnees);
        
    }

    
    creerTableauUtilisateurs()
    {
        //s'il n'y a pas de tableau utilisateurs, on va créé le tableau utilisateurs et le mettre en stockage
        if(localStorage.getItem("utilisateurs") == null)
        {
            let utilisateurs = [];
            utilisateurs = JSON.stringify(utilisateurs);
            localStorage.setItem("utilisateurs",utilisateurs);
            console.log(JSON.parse(localStorage.getItem("utilisateurs")));
        }
        else
        {
            console.log(JSON.parse(localStorage.getItem("utilisateurs")));
            console.log("Le tableau d'utilisateurs existe déjà afin d'être recréé.");
            
        }
    }
    verificationIdUtilisateur(utilisateurId) // Retourne false si on true un id correct
    {
        let utilisateurs = JSON.parse(localStorage.getItem("utilisateurs"));

        let tableauIdUtilisateur = [];
        //ajouts d'id de l'utilisateur dans un tableau
        utilisateurs.forEach((utilisateur)=>
        {
        tableauIdUtilisateur.push(utilisateur.id);
        });

        // comparaison d'id
        tableauIdUtilisateur.forEach((e)=>{
            if(e.id == utilisateurId)
            {
                return false;
            }
        });
    }
    creerCompteLocalStorage(donnees) // objet Utilisateur qui sera créé, FONCTION A METTRE A JOUR
    {
        let utilisateurs = JSON.parse(localStorage.getItem("utilisateurs"));

        let utilisateurId = crypto.randomUUID();
        //tant que l'id de l'utilisateur généré a un nombre égale à un des id des utilisateurs, on regénère son id
        do
        {
            utilisateurId = crypto.randomUUID();
        }
        while(this.verificationIdUtilisateur(utilisateurId));
        
        let adresseEmailValeur = donnees[0].value;
        let motDePasseValeur = donnees[1].value;

        // une fois l'id est fiable à 100%, on va le mettre dans l'objet qu'on va créé
        let utilisateur = 
        {
            "id": utilisateurId,
            "adresseEmail": adresseEmailValeur,
            "motDePasse": motDePasseValeur,
            "taches": []
        };

        utilisateurs.push(utilisateur);
        let nouvelUtilisateur = utilisateurs;
        localStorage.setItem("utilisateurs", JSON.stringify(nouvelUtilisateur));
        console.log("Tableau utilisateur du localStorage :" + utilisateur);
        
        
        // localStorage.setItem("session", "1234");
        // localStorage.setItem("adresseMail", donnees[1]);
        // localStorage.setItem("adresseMail", donnees[2]);
    }

    recupererDonneesInput()
    {
        let donnees = []; // [0] = adresseEmailValeur, [1] motDePasseValeur, [2] motDePasseValeur2
        let adresseEmailValeur = this.#donnees[0].value;
        let motDePasseValeur = this.#donnees[1].value;
        // let motDePasseValeur2 = this.#donnees[2].value;
        let donneesPourBoucle = [adresseEmailValeur, motDePasseValeur];

        for(let i = 0 ; i < 2 ; i++)
        {
            donnees.push(donneesPourBoucle[i]);
            console.log(donnees);

        }
        return donnees;
    }

    // quand on appuie sur le bouton pour se connecter
    recupererDonneesConnexion()
    {
        donnees = []; // [0] = adresseEmailValeur, [1] motDePasseValeur, [2] motDePasseValeur2
        adresseEmailValeur = adresseEmailInput.value;
        motDePasseValeur = motDePasseInput.value;
        donneesPourBoucle = [adresseEmailValeur, motDePasseValeur];

        for(let i = 0 ; i < 3 ; i++)
        {
            donnees.push(donneesPourBoucle[i]);

        }
        return donnees;
    }
    
    // verificationDesDonneesCreation(donneesCreation)
    // {
    //     // si le mot de passe est pareil que l'autre mot de passe écrit
    //     if(donneesCreation[1].value == donneesCreation[2].value)
    //     {
    //         console.log("mot de passe correct");
    //         return true;
    //     } 
    //     else
    //     {
    //         return false;
    //     }

    // }

    verifierSessionId() // si sessionId est à null, on retourne true
    {
        if(localStorage.getItem("sessionId") == null)
        {
            console.log("Pas de sessionId détecté");
            return true;
        }
    }

    seConnecterCompte()
    {
        // console.log("testtttttttttttt");
        let donnees = this.getDonnees();
        let donneesUtilisateurs = this.getDonneesUtilisateursLocalStorage();
        console.log("Données utilisateurs : " + donneesUtilisateurs);
        donneesUtilisateurs.forEach((e)=>
        {
            console.log("éléments du tableau utilisateurs : "+ e);
            if(e.adresseEmail == donnees[0].value)
            {
                console.log("Même adresse mail (seConnecterCompte())");
                if(e.motDePasse == donnees[1].value)
                {
                    // création du sessionId adapté
                    let sessionId = e.id;
                    // ajout du sessionId adapté
                    localStorage.setItem("sessionId", JSON.stringify(sessionId));
                    console.log("Connexion réussie");
                }
            }

            // une fois connecté, si il y'a une sessionId, on va recharger la page
            window.reload();
        });



    }
}
