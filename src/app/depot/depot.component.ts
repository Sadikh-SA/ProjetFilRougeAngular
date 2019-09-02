import { Component, OnInit } from '@angular/core';
import { AjouterService } from '../ajouter.service';
import { Depot } from '../Depot';

@Component({
  selector: 'app-depot',
  templateUrl: './depot.component.html',
  styleUrls: ['./depot.component.css']
})
export class DepotComponent implements OnInit {

  constructor( private ajouterService: AjouterService) { }

  depot:  Depot[];
  depots:  Depot  = { 
    id: null,
    compte: null,
    montantDepot: null,
    caissier: null,
    dateDepot: null
  }


  ngOnInit() {
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
