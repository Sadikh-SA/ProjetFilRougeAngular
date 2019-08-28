import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from  'rxjs';
import { Utilisateur } from './Utilisateur';
import { Partenaire } from './Partenaire';

@Injectable({
  providedIn: 'root'
})
export class ListerService {

  url = "http://127.0.0.1:8000/filrouge/lister/user";
  url1 = "http://127.0.0.1:8000/filrouge/lister/partenaire";

  constructor(private http: HttpClient) { }

  

  listerUtlisateur(): Observable<Utilisateur[]>{
    return this.http.get<any>(`${this.url}`);
  }
  listerPartenaire(): Observable<Partenaire[]>{
    return this.http.get<any>(`${this.url1}`);
  }

}
