import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PartenaireUser } from './partenaireuser';

@Injectable({
  providedIn: 'root'
})
export class AjouterService {
  

  url = "http://127.0.0.1:8000/filrouge/ajouter/partenaire";
  urlcompte = "http://127.0.0.1:8000/filrouge/compte/ajouter";
  ajoutpartenaireseul = "http://127.0.0.1:8000/filrouge/partenaire/ajouter";
  urlenvoitransaction = "http://127.0.0.1:8000/filrouge/faire/envoie";
  urlretraitransaction = "http://127.0.0.1:8000/filrouge/faire/retrait";
  urlTransaction = "http://127.0.0.1:8000/filrouge/select/transaction";
  urldepot = "http://127.0.0.1:8000/filrouge/fairedepot";
  urlprofil = "http://127.0.0.1:8000/filrouge/ajoutprofil";
  urlbloquer = "http://127.0.0.1/filrouge/bloquer";
  urlbloquerparte = "http://127.0.0.1/filrouge/bloquer/partenaire";
  private header ={headers: new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem("token"))}
  

  constructor(private http: HttpClient) { }

  createAdminPartenaire(partenaireuser: any): Observable<any>{
    console.log(this.header);
    return this.http.post<any>(`${this.url}`, partenaireuser, this.header);
  }

  creerPartenaire(partenaire: any): Observable<any>{
    console.log(this.header);
    return this.http.post<any>(`${this.ajoutpartenaireseul}`, partenaire, this.header)
  }

  ajouterTransaction(transaction: any): Observable<any>{
    console.log(this.header);
    return this.http.post<any>(`${this.urlenvoitransaction}`, transaction, this.header)
  }

  blockUser(donnee): Observable<any> {
    console.log(this.header);
    return this.http.post<any>(`${this.urlbloquer}`,donnee, this.header)
  }

  creerDepot(depot: any): Observable<any>{
    console.log(this.header);
    return this.http.post<any>(`${this.urldepot}`, depot, this.header)
  }

  creerCompte(compte: any): Observable<any>{
    console.log(this.header);
    return this.http.post<any>(`${this.urlcompte}`,compte, this.header)
  }

  creerProfil(profil: any): Observable<any>{
    console.log(this.header);
    return this.http.post<any>(`${this.urlprofil}`,profil, this.header)
  }

  findTransaction(transaction: any): Observable<any>{
    //console.log(this.header);
    return this.http.post<any>(`${this.urlTransaction}`,transaction, this.header)
  }

  bloquerPart(donnee: any) {
    return this.http.post<any>(`${this.urlbloquerparte}`,donnee, this.header)
  }

}
