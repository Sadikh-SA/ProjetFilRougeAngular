import { Component, OnInit } from '@angular/core';
import { AjouterService } from '../ajouter.service';
import { Profil } from '../Profil';
import { ListerService } from '../lister.service';
import { ToastrService } from 'ngx-toastr';


 @Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  constructor( private ajouterService: AjouterService, private listerService: ListerService, private toster: ToastrService) { }

  profil:  Profil[];
  profils:  Profil  = { 
    id: null,
    libelle: null,
  }

  private prof


  ngOnInit() {
    this.listerService.listerProfil().subscribe((prof: any)=> {
      this.prof = prof;
      console.log(this.prof)
    })
  }


  ajouterProfil(data){
    this.ajouterService.creerProfil(data.value)
    .subscribe((res)=>{
      //alert(res.message)
      this.toster.success("Le nouveau profil est enregistrer avec succès")
      console.log(res)
    },
    err => {
      this.toster.error("Ce profil Existe déja ou champs vide")
      console.log(err);
    }
    );
  }

}
