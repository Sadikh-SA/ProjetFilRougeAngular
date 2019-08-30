import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from  'rxjs';
import { Utilisateur } from './Utilisateur';
import { Partenaire } from './Partenaire';

@Injectable({
  providedIn: 'root'
})
export class ListerService {

  url = "http://127.0.0.1:8000/filrouge/lister/user";
  url1 = "http://127.0.0.1:8000/filrouge/lister/partenaire";

  private header = {headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))}

  constructor(private http: HttpClient) { }

  listerUtlisateur(): Observable<Utilisateur[]>{
    console.log(this.header);
    return this.http.get<any>(`${this.url}`,this.header);
  }

  listerPartenaire(): Observable<Partenaire[]>{
    console.log(this.header);
    return this.http.get<any>(`${this.url1}`, this.header);
  }

}
