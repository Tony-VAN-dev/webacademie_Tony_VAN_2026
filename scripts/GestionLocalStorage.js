class gestionLocalStorage{
    #donnees = [];
    constructor(donnees)
    {

        
    }

    creerUnCompte()
        {
            let donnees = recupererDonneesConnexion();
            
        }

        creerCompteLocalStorage(donnees)
        {
            localStorage.setItem("session", "1234");
        }

        

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
        
        verificationDesDonnees()
        {

        }

}