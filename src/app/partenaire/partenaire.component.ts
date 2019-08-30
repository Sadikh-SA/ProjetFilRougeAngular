import { Component, OnInit } from '@angular/core';
import { Partenaire } from '../Partenaire';
import { ListerService } from '../lister.service';
import { AjouterService } from '../ajouter.service';

@Component({
  selector: 'app-partenaire',
  templateUrl: './partenaire.component.html',
  styleUrls: ['./partenaire.component.css']
})
export class PartenaireComponent implements OnInit {
  
  partenaire:  Partenaire[];
  part:  Partenaire  = { 
    ninea: null,
    localisation: null,
    domaineActivite: null,
    statut: null,
    dateCreation: null
  }

  constructor( private listerService: ListerService, private ajouterService: AjouterService) { }

  ngOnInit() {
    this.listerService.listerPartenaire().subscribe((partenaire: Partenaire[])=>{
      this.partenaire = partenaire;
      console.log(this.partenaire)
    })
  }

  ajouterParte(data){
    // if(this.selectedPolicy && this.selectedPolicy.id){
    //   form.value.id = this.selectedPolicy.id;
    //   this.ajouterService.updatePolicy(form.value).subscribe((policy: Policy)=>{
    //     console.log("Policy updated" , policy);
    //   });
    // }
    // else{

      this.ajouterService.creerPartenaire(data.value).subscribe((res)=>{
        console.log(res);
      });
    //}

  }

}
