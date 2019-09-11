import { Component, OnInit, ViewChild } from '@angular/core';
import { Compte } from '../compte';
import { AjouterService } from '../ajouter.service';
import { ListerService } from '../lister.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';


// export interface Compte {
//   id: number;
//   numeroComte: number;
//   codeBank: number;
//   solde: number;
//   partenaire: any;
//   dateCreation: any;
// }

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent implements OnInit {

  displayedColumns: string[] = ['id', 'numeroCompte', 'nomBeneficiaire', 'solde', 'dateCreation','partenaire'];
  dataSource: MatTableDataSource<Compte>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor( private ajouterService: AjouterService, private listerService: ListerService, private toster: ToastrService) {
    //this.dataSource = new MatTableDataSource(users);
   }

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
  private comptes;


  datatable(data) {
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit() {

    this.listerService.listerPartenaire().subscribe((partenaire: any)=>{
      this.partenaire = partenaire;
      this.datatable(this.comptes);
      console.log(this.partenaire)
    })

    this.listerService.listerCompte().subscribe((comptes)=> {
      this.comptes = comptes;
      this.datatable(this.comptes);
      console.log(this.comptes)
    })

    
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  ajouterCompte(data){
    this.ajouterService.creerCompte(data.value).subscribe((res)=>{
      //alert(res.message)
      this.toster.success("Le nouveau profil est enregistrer avec succès")
      Swal.fire(
        'AJOUT AVEC SUCCES!',
        'success'
      )
      console.log(res);
      this.ngOnInit()
    },
    err => {
      console.log(err.error.error)
      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'Erreur Inconnue!'
      })
    }
    );
  }
}
