import { Component, OnInit } from '@angular/core';
import { ListerService } from '../lister.service'
import { Utilisateur } from '../Utilisateur';
import { AjouterService } from '../ajouter.service';
import { PartenaireUser } from '../partenaireuser';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit {


  user:  Utilisateur[];
  adminpart: PartenaireUser[]
  selectedPolicy:  PartenaireUser  = { 
      id: null,
      username:  null,
      password:  null,
      nom: null,
      prenom: null,
      adresse: null,
      email: null,
      tel: null,
      profil: null,
      dateCreation: null,
      imageName: null,
      ninea: null,
      localisation: null,
      domaineActivite: null,
      dateCreation1: null,
  };

  constructor( private listerService: ListerService, private ajouterService: AjouterService) { }

  ngOnInit() {
    this.listerService.listerUtlisateur().subscribe((user: Utilisateur[])=>{
      this.user = user;
      console.log(this.user)
    });
  }
  selectPolicy(policy: PartenaireUser){
    this.selectedPolicy = policy;
  }
  createOrUpdatePolicy(data){
    // if(this.selectedPolicy && this.selectedPolicy.id){
    //   form.value.id = this.selectedPolicy.id;
    //   this.ajouterService.updatePolicy(form.value).subscribe((policy: Policy)=>{
    //     console.log("Policy updated" , policy);
    //   });
    // }
    // else{

      this.ajouterService.createAdminPartenaire(data.value).subscribe((adminpart: PartenaireUser)=>{
        console.log(adminpart, adminpart);
      });
    //}

  }
}
