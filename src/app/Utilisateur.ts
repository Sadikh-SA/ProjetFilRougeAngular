//FilRouge/Utilisateur

export  class  Utilisateur {
    id: number;
    username:  string;
    password:  string;
    nom: string;
    prenom: string;
    adresse: string;
    tel: string;
    email: string;
    statut: boolean;
    profil: string;
    //dateCreation: Date;
    imageName: string;
    updateAt: Date;
    partenaire: any;
    compte: any;
    ninea: number;
    localisation: string;
    
    codeBank: number;
    nomBeneficiaire: string;

    roles: JSON;
}