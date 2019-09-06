
export class Transaction {
    id: number;
    nomEnvoyeur: string;
    prenomEnvoyeur: string;
    adresseEnvoyeur: string;
    telEnvoyeur: string;
    CNIEnvoyeur: number;
    nomBeneficiaire: string;
    prenomBeneficiaire: string;
    telBeneficiaire: string;
    adresseBeneficiaire: string;
    numeroTransaction: string;
    montantEnvoyer: number;
    totalEnvoyer: number;
    montantRetirer: number;
    CNIBeneficiaire: number;
    dateEnvoie: Date;
    dateRetrait: Date;
    commissionTTC: any;
    type: number;
    commissionEtat: number;
    commissionWari: number;
    commissionEnvoi: number;
    commissionRetrait: number;
    utilisateur: any;
    userRetrait: any;
}