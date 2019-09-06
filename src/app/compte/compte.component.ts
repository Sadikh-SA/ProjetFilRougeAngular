import { Component, OnInit } from '@angular/core';
import { Compte } from '../compte';
import { AjouterService } from '../ajouter.service';
import { ListerService } from '../lister.service';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent implements OnInit {

  constructor( private ajouterService: AjouterService, private listerService: ListerService) { }

  compte:  Compte[];
  compte1:  Compte  = { 
    id: null,
    numeroCompte: null,
    codeBank: null,
    nomBeneficiaire: null,
    solde: null,
    dateCreation: null,
    partenaire: null
  }
  private partenaire;


  ngOnInit() {
    this.listerService.listerPartenaire().subscribe((partenaire: any)=>{
      this.partenaire = partenaire;
      console.log(this.partenaire)
    })
  }


  ajouterCompte(data){
    this.ajouterService.creerCompte(data.value).subscribe((res)=>{
      alert(res.message)
      console.log(res);
    },
    err => {
      console.log(err.error.error);
    }
    );
  }
}
