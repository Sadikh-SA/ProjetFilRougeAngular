import { Component, OnInit, ViewChild } from '@angular/core';
import { AjouterService } from '../ajouter.service';
import { Depot } from '../Depot';
import { ListerService } from '../lister.service';
import Swal from 'sweetalert2';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-depot',
  templateUrl: './depot.component.html',
  styleUrls: ['./depot.component.css']
})
export class DepotComponent implements OnInit {

  displayedColumns: string[] = ['id', 'numeroCompte', 'nomBeneficiaire', 'dateDepot','caissier'];
  dataSource: MatTableDataSource<Depot>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor( private ajouterService: AjouterService, private listerService: ListerService) { }

  depot:  Depot[];
  depots:  Depot  = { 
    id: null,
    compte: null,
    montantDepot: null,
    caissier: null,
    dateDepot: null
  }
  depo = {
    numeroCompte: null
  }
  private depôt;

  datatable(data) {
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  ngOnInit() {
    this.listerService.listerDepot().subscribe((depot: any)=> {
      this.depôt = depot;
      this.datatable(this.depôt);
      console.log(this.depôt)
    })
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  ajouterDepot(data){
    this.ajouterService.creerDepot(data.value).subscribe((res)=>{
      //alert(res.message)
      Swal.fire(
        'AJOUT AVEC SUCCES!',
        'success'
      )
      console.log(res);
      this.ngOnInit()
    },
    err => {

      console.log(err.error.error);
      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'Erreur Inconnue!'
      })
      
    }
    );
  }


  findCompte() {
    this.ajouterService.findCompte(this.depo)
      .subscribe(
        res => {
          console.log(res);
          this.depo = res
        },
        err => {
          console.log(this.depo);
          console.log(err);
        }
      )
  }

}
