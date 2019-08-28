import { Component, OnInit } from '@angular/core';
import { Partenaire } from '../Partenaire';
import { ListerService } from '../lister.service';

@Component({
  selector: 'app-partenaire',
  templateUrl: './partenaire.component.html',
  styleUrls: ['./partenaire.component.css']
})
export class PartenaireComponent implements OnInit {
  
  partenaire:  Partenaire[];


  constructor( private listerService: ListerService) { }

  ngOnInit() {
    this.listerService.listerPartenaire().subscribe((partenaire: Partenaire[])=>{
      this.partenaire = partenaire;
      console.log(this.partenaire)
    })
  }

}
