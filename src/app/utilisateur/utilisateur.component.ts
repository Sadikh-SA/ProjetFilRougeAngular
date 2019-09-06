import { Component, OnInit } from '@angular/core';
import { ListerService } from '../lister.service'
import { Utilisateur } from '../Utilisateur';
import { AjouterService } from '../ajouter.service';
import { PartenaireUser } from '../partenaireuser';
import { AuthentificationService } from '../authentification.service';


@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit {


  test = false;
  test1 = false;
  test2 = false;

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
      partenaire: null,
      compte: null,
      imageName: null,
      ninea: null,
      localisation: null,
      domaineActivite: null,
      codeBank: null,
      numeroCompte: null,
      nomBeneficiaire: null,
      statut: null,
      updatedAt: null,
      dateCreationuser: null,
      dateCreationpartenaire: null,
      dateCreationcompte: null
  };
  
  imageUrl:string="/assets/img/avatar-1.png";
  registerUserData = { 
    username:  null,
      password:  null,
      nom: null,
      prenom: null,
      adresse: null,
      email: null,
      tel: null,
      imageName : File=null,
      profil: null,
      partenaire: null,
      compte: null,
      ninea: null,
      localisation: null,
      domaineActivite: null,
      codeBank: null,
      numeroCompte: null,
      nomBeneficiaire: null,
      statut: null,
      updatedAt: null,
      dateCreationuser: null,
      dateCreationpartenaire: null,
      dateCreationcompte: null
  };

  constructor( private listerService: ListerService, private ajouterService: AjouterService, private authService: AuthentificationService) { }

  

  ngOnInit() {
    this.listerService.listerUtlisateur().subscribe(
      (user: Utilisateur[])=>{
      this.user = user;
      console.log(user)
    });
  }
  selectPolicy(policy: PartenaireUser){
    this.selectedPolicy = policy;
  }
  ajouter(data){
    // if(this.selectedPolicy && this.selectedPolicy.id){
    //   form.value.id = this.selectedPolicy.id;
    //   this.ajouterService.updatePolicy(form.value).subscribe((policy: Policy)=>{
    //     console.log("Policy updated" , policy);
    //   });
    // }
    // else{

      this.ajouterService.createAdminPartenaire(data.value).subscribe(
        (res)=>{
          console.log(res);
        },
          err => console.log(err)
      );
    //}

  }

  afficher() {
    this.test = true;
    this.test1 = false;
    this.test2 = false;
  }
  afficher1() {
    this.test1 = true;
    this.test = false;
    this.test2 = false;
  }
  afficher2() {
    this.test2 = true;
    this.test = false;
    this.test1 = false;
  }


  handleFileInput(file : FileList){
    this.registerUserData.imageName = file.item(0);

    //show image preview 
    var reader =  new  FileReader();
    reader.onload = (event:any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.registerUserData.imageName);
  }

  registerUser(){
    this.authService.registerUser(this.registerUserData)
    .subscribe(
      res =>{
        console.log(this.registerUserData);
        console.log(res)
      },
      err => { 
        console.log(err),
        console.log(this.registerUserData)
      }
    )
  }


  isSuperAdmin(){
    return this.authService.isSuperAdmin();
  }

  isCaissier(){
    return this.authService.isCaissier();
  }

  isPartener(){
    return this.authService.isPartener();
  }

  isAdminWari(){
    return this.authService.isAdminWari();
  }

  isUser(){
    return this.authService.isUser();
  }

  isAdminPartener(){
    return this.authService.isAdminPartener();
  }

  logOut() {
    return this.authService.logOut()
  }

  isAuthenticated(){
    return this.authService.isAuthenticated();
  }

  
}
