import { Component, OnInit } from '@angular/core';
import { ListerService } from '../lister.service';
import { AjouterService } from '../ajouter.service';
import { Transaction } from '../Transaction';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  transaction:  Transaction[];
  trans:  Transaction  = { 
    id: null,
    nomEnvoyeur: null,
    prenomEnvoyeur: null,
    adresseEnvoyeur: null,
    telEnvoyeur: null,
    CNIEnvoyeur: null,
    nomBeneficiaire: null,
    prenomBeneficiaire: null,
    telBeneficiaire: null,
    adresseBeneficiaire: null,
    numeroTransaction: null,
    montantEnvoyer: null,
    totalEnvoyer: null,
    montantRetirer: null,
    CNIBeneficiaire: null,
    dateEnvoie: null,
    dateRetrait: null,
    commissionTTC: null,
    type: null,
    commissionEtat: null,
    commissionWari: null,
    commissionEnvoi: null,
    commissionRetrait: null,
    utilisateur: null,
    userRetrait: null
  }

  constructor( private listerService: ListerService, private ajouterService: AjouterService) { }

  ngOnInit() {
    this.listerService.listerTransaction().subscribe((transaction: Transaction[])=>{
      this.transaction = transaction;
      console.log(this.transaction)
    })
  }

  ajouterTrans(data){
      this.ajouterService.ajouterTransaction(data.value).subscribe((res)=>{
        alert(res.message)
        console.log(res);
      },
      err => {
        alert(err.error.error.get('message'))
        console.log(err)
        console.log(err.error.error);
        
      }
      );
    }

}
