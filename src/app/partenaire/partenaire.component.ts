import { Component, OnInit, ViewChild } from '@angular/core';
import { Partenaire } from '../Partenaire';
import { ListerService } from '../lister.service';
import { AjouterService } from '../ajouter.service';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import Swal from 'sweetalert2';

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

  displayedColumns: string[] = ['ninea', 'localisation','domaineActivite', 'statut', 'dateCreation','action'];
  dataSource: MatTableDataSource<Partenaire>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.listerService.listerPartenaire().subscribe((partenaire: Partenaire[])=>{
      this.partenaire = partenaire;
      this.datatable(this.partenaire);
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
        //alert(res.message);
        Swal.fire(
          'PARTENAIRE AJOUTÉ!',
          'success'
        )
        this.ngOnInit()
      },
      err => {
        console.log(err);
        Swal.fire({
          type: 'error',
          title: 'Oops...',
          text: 'Tous les champs sont obligatoire!'
        })
        
      }
      
      );
    //}

  }


  bloquerParte(donnee){
    console.log(donnee);
    this.ajouterService.bloquerPart(donnee).subscribe(
      res => {
        console.log(res)
        this.ngOnInit()
      },
      err => {
        console.log(err)
        Swal.fire({
          type: 'error',
          title: 'Oops...',
          text: 'Erreur Inconnue!'
        })
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
