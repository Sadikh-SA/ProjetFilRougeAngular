import { Component, OnInit, ViewChild } from '@angular/core';
import { ListerService } from '../lister.service';
import { AjouterService } from '../ajouter.service';
import { Transaction } from '../Transaction';
import Swal from 'sweetalert2';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  afficherRecu = false;

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
  // private Compte;

  constructor(private listerService: ListerService, private ajouterService: AjouterService) { }

  displayedColumns: string[] = ['numeroTransaction', 'dateEnvoie', 'type', 'utilisateur', 'dateRetrait', 'userRetrait'];
  dataSource: MatTableDataSource<Transaction>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  ngOnInit() {
    this.listerService.listerTransaction().subscribe((transaction: any) => {
      this.transaction = transaction;
      this.datatable(this.transaction);
      console.log(this.transaction)
    })
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
      console.log(res.recu);
      Swal.fire({
        title: '<strong>Info</strong>',
        type: 'success',
        html:
          '<h2>Destinataire</h2>'

          + '<p>NomComplet : ' + res.recu.nomBeneficiaire + '</p>'
          + '<p>telephone : ' + res.recu.telBeneficiaire + '</p>'

          + '<h2>Envoyeur</h2>'

          + '<p>Envoyeur : ' + res.recu.nomEnvoyeur + '</p>'
          + '<p>CNI : ' + res.recu.CNIEnvoyeur + '</p>'
          + '<p>telephone : ' + res.recu.telEnvoyeur + '</p>'

          + '<h2>Transaction</h2>'

          + '<p>CodeEnvoi : ' + res.recu.numeroTransaction + '</p>',

        showCloseButton: true,
        focusConfirm: false,
        confirmButtonText:
          '<i class="fa fa-thumbs-up"></i> Ok',
        confirmButtonAriaLabel: 'Thumbs up, great!',
      })
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

  retrait() {
    document.getElementById("retrait").style.display = "block";
    document.getElementById("envoie").style.display = "none";
    document.getElementById("envoies").style.display = "block";
    document.getElementById("retraits").style.display = "none";
  }
  envoie() {
    document.getElementById("envoie").style.display = "block";
    document.getElementById("retrait").style.display = "none";
    document.getElementById("retraits").style.display = "block";
    document.getElementById("envoies").style.display = "none";
  }




  retirer(data) {


    this.ajouterService.retirerTransaction(data.value).subscribe((res) => {
      //alert(res.message)
      console.log(res)
      console.log(data.value)
      Swal.fire({
        title: '<strong>Info</strong>',
        type: 'success',
        html:
          '<h2>Destinataire</h2>'

          + '<p>NomComplet : ' + res.recu.nomBeneficiaire + '</p>'
          + '<p>telephone : ' + res.recu.telBeneficiaire + '</p>'
          + '<p>CNI : ' + res.recu.CNIBeneficiaire + '</p>'

          + '<h2>Envoyeur</h2>'

          + '<p>Envoyeur : ' + res.recu.nomEnvoyeur + '</p>'
          + '<p>CNI : ' + res.recu.CNIEnvoyeur + '</p>'
          + '<p>telephone : ' + res.recu.telEnvoyeur + '</p>'

          + '<h2>Transaction</h2>'

          + '<p>CodeEnvoi : ' + res.recu.numeroTransaction + '</p>'
          + '<p>Montant Retirer : ' + res.recu.montantRetirer + '</p>',

        showCloseButton: true,
        focusConfirm: false,

        confirmButtonText:
          '<i class="fa fa-thumbs-up"></i> Ok',
        confirmButtonAriaLabel: 'Thumbs up, great!',
      })

      this.recu()

      this.ngOnInit()


    },
      err => {
        //alert(err.error.error.get('message'))
        console.log(data)
        console.log(data.value)
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

  recu() {
    this.afficherRecu = true;
    setTimeout(() => {
      window.print();
    }, 3000)
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


  datatable(data) {
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}

