class gestionLocalStorage{
    #donnees = [];
    constructor(donnees)
    {
        this.#donnees = donnees;
    }

    creerUnCompte() // fonction principale
        {
            let donnees = recupererDonneesConnexion();
            this.verificationDesDonnees(donnees);
            
        }

    creerCompteLocalStorage(donnees) // objet Utilisateur qui sera créé, FONCTION A METTRE A JOUR
    {
        localStorage.setItem("session", "1234");
        localStorage.setItem("adresseMail", donnees[1]);
        localStorage.setItem("adresseMail", donnees[2]);
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
    
    verificationDesDonnees(donneesConnexion, donneesLocalStorage)
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