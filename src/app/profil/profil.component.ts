import { Component, OnInit, ViewChild } from '@angular/core';
import { AjouterService } from '../ajouter.service';
import { Profil } from '../Profil';
import { ListerService } from '../lister.service';
import { ToastrService } from 'ngx-toastr';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import Swal from 'sweetalert2';


 @Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  displayedColumns: string[] = ['id', 'libelle'];
  dataSource: MatTableDataSource<Profil>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor( private ajouterService: AjouterService, private listerService: ListerService, private toster: ToastrService) { }

  profil:  Profil[];
  profils:  Profil  = { 
    id: null,
    libelle: null,
  }

  private prof;

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


  ngOnInit() {
    this.listerService.listerProfil().subscribe((prof: any)=> {
      this.prof = prof;
      this.datatable(this.prof);
      console.log(this.prof)
    })
  }


  ajouterProfil(data){
    this.ajouterService.creerProfil(data.value)
    .subscribe((res)=>{
      //alert(res.message)
      //this.toster.success("Le nouveau profil est enregistrer avec succès")
      console.log(res)
      Swal.fire(
        'NOUVEAU PROFIL AJOUTER!',
        'success'
      )
      this.ngOnInit()
    },
    err => {
      //this.toster.error("Ce profil Existe déja ou champs vide")
      console.log(err);
      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'Erreur tous les champs sont obligatoires!'
      })
    }
    );
  }

}
