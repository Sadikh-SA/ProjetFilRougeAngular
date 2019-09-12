import { Component, OnInit } from '@angular/core';
import { ListerService } from '../lister.service';
import { AjouterService } from '../ajouter.service';
import { Transaction } from '../Transaction';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  transaction: Transaction[];
  trans: Transaction = {
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
  CompteData: {}
  private Compte;

  constructor(private listerService: ListerService, private ajouterService: AjouterService) { }

  ngOnInit() {
    // this.listerService.listerTransaction().subscribe((transaction: any) => {
    //   this.transaction = transaction;
    //   console.log(this.transaction)
    // })
  }

  ajouterTrans(data) {

    // if(this.selectedPolicy && this.selectedPolicy.id){
    //   form.value.id = this.selectedPolicy.id;
    //   this.ajouterService.updatePolicy(form.value).subscribe((policy: Policy)=>{
    //     console.log("Policy updated" , policy);
    //   });
    // }

    this.ajouterService.ajouterTransaction(data.value).subscribe((res) => {
      //alert(res.message)
      console.log(res);
      Swal.fire(
        'Transaction Réussie!',
        'success'
      )
      this.ngOnInit()
    },
      err => {
        //alert(err.error.error.get('message'))
        console.log(err)
        console.log(err.error.error);
        Swal.fire({
          type: 'error',
          title: 'Oops...',
          text: 'Erreur Inconnue!'
        })

      }
    );
  }

  retrait(){
    document.getElementById("retrait").style.display="block";
    document.getElementById("envoie").style.display="none";
    document.getElementById("envoies").style.display="block";
    document.getElementById("retraits").style.display="none";
  }
  envoie(){
    document.getElementById("envoie").style.display="block";
    document.getElementById("retrait").style.display="none";
    document.getElementById("retraits").style.display="block";
    document.getElementById("envoies").style.display="none";
  }
  



    retirer(data) {
      this.ajouterService.retirerTransaction(data.value).subscribe((res) => {
        //alert(res.message)
        console.log(res);
        Swal.fire(
          'Retrait Réussie!',
          'success'
        )
        this.ngOnInit()
      },
        err => {
          //alert(err.error.error.get('message'))
          console.log(data)
          console.log(err)
          console.log(err.error.error);
          Swal.fire({
            type: 'error',
            title: 'Oops...',
            text: 'Erreur Inconnue!'
          })
  
        }
      );
    }


  findTransaction() {
    this.ajouterService.findTransaction(this.trans)
      .subscribe(
        res => {
          console.log(res);
          this.trans = res
          this.CompteData = res
        },
        err => {
          console.log(this.trans);
          
          console.log(err);
        }
      )
  }

}
