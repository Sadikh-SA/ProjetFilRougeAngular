import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PartenaireUser } from './partenaireuser';

@Injectable({
  providedIn: 'root'
})
export class AjouterService {

  url = "http://127.0.0.1:8000/filrouge/ajouter/partenaire";
  private header ={headers: new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem("token"))}
  

  constructor(private http: HttpClient) { }

  createAdminPartenaire(partenaireuser: PartenaireUser): Observable<PartenaireUser>{
    console.log(this.header);
    return this.http.post<any>(`${this.url}`, partenaireuser, this.header);
  }

}
