import { Component, OnInit } from '@angular/core';
import { AjouterService } from '../ajouter.service';
import { Depot } from '../Depot';
import { ListerService } from '../lister.service';

@Component({
  selector: 'app-depot',
  templateUrl: './depot.component.html',
  styleUrls: ['./depot.component.css']
})
export class DepotComponent implements OnInit {

  constructor( private ajouterService: AjouterService, private listerService: ListerService) { }

  depot:  Depot[];
  depots:  Depot  = { 
    id: null,
    compte: null,
    montantDepot: null,
    caissier: null,
    dateDepot: null
  }
  private depôt;


  ngOnInit() {
    this.listerService.listerDepot().subscribe((depot: any)=> {
      this.depôt = depot;
      console.log(this.depôt)
    })
  }


  ajouterDepot(data){
    this.ajouterService.creerDepot(data.value).subscribe((res)=>{
      alert(res.message)
      console.log(res);
    },
    err => {
      console.log(err.error.error);
      
    }
    );
  }
}
