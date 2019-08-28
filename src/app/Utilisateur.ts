//FilRouge/Utilisateur

export  class  Utilisateur {
    id: number;
    username:  string;
    password:  string;
    nom: string;
    prenom: string;
    adresse: string;
    email: string;
    tel: string;
    statut: boolean;
    profil: string;
    dateCreation: Date;
    image_name: string;
    updateAt: Date;
    partenaire: number;
    compte: number;
    roles: JSON;
}