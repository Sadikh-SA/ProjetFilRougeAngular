import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Utilisateur } from './Utilisateur';
import { Partenaire } from './Partenaire';
import { Transaction } from './Transaction';
import { Compte } from './compte';
import { Profil } from './Profil';
import { Depot } from './Depot';

@Injectable({
  providedIn: 'root'
})
export class ListerService {

  urluser = "http://127.0.0.1:8000/filrouge/lister/user";
  urlpartenaire = "http://127.0.0.1:8000/filrouge/lister/partenaire";
  urltransaction = "http://127.0.0.1:8000/filrouge/lister/transaction";
  urlcompte = "http://127.0.0.1:8000/filrouge/lister/compte";
  urlprofil = "http://127.0.0.1:8000/filrouge/lister/profil";
  urldepot = "http://127.0.0.1:8000/filrouge/lister/depot";


  private header = { headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token')) }

  constructor(private http: HttpClient) { }

  listerUtlisateur(): Observable<Utilisateur[]> {
    console.log(this.header);
    return this.http.get<any>(`${this.urluser}`, this.header);
  }

  listerPartenaire(): Observable<Partenaire[]> {
    console.log(this.header);
    return this.http.get<any>(`${this.urlpartenaire}`, this.header);
  }

  listerTransaction(): Observable<Transaction[]> {
    console.log(this.header);
    return this.http.get<any>(`${this.urltransaction}`, this.header);
  }

  listerCompte(): Observable<Compte[]> {
    console.log(this.header);
    return this.http.get<any>(`${this.urlcompte}`, this.header);
  }

  listerProfil(): Observable<Profil[]> {
    console.log(this.header);
    return this.http.get<any>(`${this.urlprofil}`, this.header);
  }

  listerDepot(): Observable<Depot[]> {
    console.log(this.header);
    return this.http.get<any>(`${this.urldepot}`, this.header);
  }

}
