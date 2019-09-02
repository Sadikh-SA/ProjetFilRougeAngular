import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PartenaireUser } from './partenaireuser';

@Injectable({
  providedIn: 'root'
})
export class AjouterService {

  url = "http://127.0.0.1:8000/filrouge/ajouter/partenaire";
  url1 = "http://127.0.0.1:8000/filrouge/partenaire/ajouter";
  url2 = "http://127.0.0.1:8000/filrouge/faire/envoie";
  url3 = "http://127.0.0.1:8000/filrouge/faire/retrait/{id}";
  url4 = "http://127.0.0.1:8000/filrouge/fairedepot";
  private header ={headers: new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem("token"))}
  

  constructor(private http: HttpClient) { }

  createAdminPartenaire(partenaireuser: any): Observable<any>{
    console.log(this.header);
    return this.http.post<any>(`${this.url}`, partenaireuser, this.header);
  }

  creerPartenaire(partenaire: any): Observable<any>{
    console.log(this.header);
    return this.http.post<any>(`${this.url1}`, partenaire, this.header)
  }

  ajouterTransaction(transaction: any): Observable<any>{
    console.log(this.header);
    return this.http.post<any>(`${this.url2}`, transaction, this.header)
  }

  creerDepot(depot: any): Observable<any>{
    console.log(this.header);
    return this.http.post<any>(`${this.url4}`, depot, this.header)
  }

}
