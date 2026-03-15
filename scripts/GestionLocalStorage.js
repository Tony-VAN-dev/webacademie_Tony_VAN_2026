export class GestionLocalStorage{
    #donnees = [];

    constructor(donnees)
    {
        donnees.forEach((e)=>{
            this.#donnees.push(e);
        });
    }

    getDonnees(){
        console.log(this.#donnees);
        return this.#donnees;
    }
    creerUnCompte() // fonction principale
    {
        // let donnees = 
        let donnees = this.getDonnees();
        // let donnees = this.recupererDonneesInput();
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
            console.log("Le tableau d'utilisateurs existe déjà.");
            
        }
    }
    verificationIdUtilisateur() // Retourne false si on true un id correct
    {
        let utilisateurs = JSON.parse(localStorage.getItem("utilisateurs"));

        let tableauIdUtilisateur = [];
        utilisateurs.forEach((utilisateur)=>
        {
        tableauIdUtilisateur.push(utilisateur.id);
        });

        tableauIdUtilisateur.forEach((e)=>{
            if(e.id == utilisateurId)
            {
                return false;
            }
        });
    }
    creerCompteLocalStorage(donnees) // objet Utilisateur qui sera créé, FONCTION A METTRE A JOUR
    {
        let utilisateurId = crypto.randomUUID();
        //tant que l'id de l'utilisateur généré a un nombre égale à un des id des utilisateurs, on regénère son id
        do
        {
            utilisateurId = crypto.randomUUID();
        }
        while(this.verificationIdUtilisateur(utilisateurId));
        
        // une fois l'id est fiable à 100%, on va le mettre dans l'objet qu'on va créé
        let utilisateur = 
        {
            "id": utilisateurId,
            "adresse mail": donnees[0],
            "motDePasse": donnees[1],
            "taches": []
        };
        // localStorage.setItem("session", "1234");
        // localStorage.setItem("adresseMail", donnees[1]);
        // localStorage.setItem("adresseMail", donnees[2]);
    }

    recupererDonneesInput()
    {
        let donnees = []; // [0] = adresseEmailValeur, [1] motDePasseValeur, [2] motDePasseValeur2
        let adresseEmailValeur = this.#donnees[0].value;
        let motDePasseValeur = this.#donnees[1].value;
        let motDePasseValeur2 = this.#donnees[2].value;
        let donneesPourBoucle = [adresseEmailValeur, motDePasseValeur, motDePasseValeur2];

        for(let i = 0 ; i < 3 ; i++)
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
        motDePasseValeur2 = motDePasseInput2.value;
        donneesPourBoucle = [adresseEmailValeur, motDePasseValeur, motDePasseValeur2];

        for(let i = 0 ; i < 3 ; i++)
        {
            donnees.push(donneesPourBoucle[i]);

        }
        return donnees;
    }
    
    verificationDesDonneesCreation(donneesConnexion, donneesLocalStorage)
    {
        // si le mot de passe est pareil que l'autre mot de passe écrit
        if(donneesConnexion[1] == donnees[2])
        {
            console.log("mot de passe correct");
        }

    }

    verifierSessionId()
    {
        if(localStorage.getItem("sessionId") == null)
        {
            console.log("Pas de sessionId détecté");
        }
    }

}
