import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { JwtHelperService } from "@auth0/angular-jwt";
import { from, Subscriber } from 'rxjs';
import { Injectable } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { Utilisateur } from './Utilisateur';


export const TOKEN_NAME: string = 'token';
//const helper = new JwtHelperService();
@Injectable()
export class AuthentificationService {
  private helper = new JwtHelperService();
  private url: string = 'http://localhost:8000/filrouge';
  jwt: string;
  username: string;
  roles: Array<string>;
  private header = { headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token')) }
  constructor(private http: HttpClient, private router: Router) { }

  getToken(): string {
    return localStorage.getItem(TOKEN_NAME);
  }

  setToken(token: string): void {
    localStorage.setItem("token", token);
    this.jwt = token;
  }
  login(user) {
    return this.http.post<any>(`${this.url}/login`, user);
  }

  logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('roles');
    this.jwt = undefined;
    this.username = undefined;
    this.roles = undefined;
    this.router.navigateByUrl("/login")
  }


  /**
   * Image
   */

  registerUser(User) {
    // return this.http.post<any>(this._registerUrl, user)

    const endpoint = 'http://localhost:8000/filrouge/ajouter/partenaire';
    const formData: FormData = new FormData();
    formData.append('username', User.username);
    formData.append('password', User.password);
    formData.append('nom', User.nom);
    formData.append('prenom', User.prenom);
    formData.append('adresse', User.adresse);
    formData.append('email', User.email);
    formData.append('tel', User.tel);
    formData.append('imageName', User.imageName);
    formData.append('profil', User.profil);
    switch (User.profil) {
      case "12":
        formData.append('compte', User.compte);
        break;
      case "11":
        formData.append('ninea', User.ninea);
        formData.append('localisation', User.localisation);
        formData.append('domaineActivite', User.domaineActivite);
        formData.append('codeBank', User.codeBank);
        formData.append('nomBeneficiaire', User.nomBeneficiaire);
        break;

      default:
        break;
    }
    return this.http
      .post(endpoint, formData, this.header);
  }


  isSuperAdmin() {

    return localStorage.getItem("roles").indexOf("ROLE_Super-Admin") >= 0;
  }

  isCaissier() {

    return localStorage.getItem("roles").indexOf("ROLE_Caissier") >= 0;
  }

  isPartener() {

    return localStorage.getItem("roles").indexOf("ROLE_Partenaire") >= 0;
  }

  isAdminWari() {
    return localStorage.getItem("roles").indexOf("ROLE_Wari") >= 0;
  }

  isUser() {
    return localStorage.getItem("roles").indexOf("ROLE_Utilisateur") >= 0;
  }

  isAdminPartener() {

    return localStorage.getItem("roles").indexOf("ROLE_Admin-Partenaire") >= 0;
  }

  isAuthenticated() {
    return localStorage.getItem("roles") && (this.isAdminWari() ||
      this.isAdminPartener()
      || this.isCaissier() || this.isUser() ||
      this.isSuperAdmin() || this.isPartener());
  }

  isTokenExpired(token?: string): boolean {
    if (!token) token = this.getToken();
    this.helper.isTokenExpired(token);
    if (!token) return true;
    // const date = this.helper.getTokenExpirationDate(this.getToken()); 
  }
}
