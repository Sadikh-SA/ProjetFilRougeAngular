import { HttpClient, } from '@angular/common/http';
import { JwtHelperService } from "@auth0/angular-jwt";
import { from, Subscriber } from 'rxjs';
import { Injectable } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';


export const TOKEN_NAME: string = 'token';
//const helper = new JwtHelperService();
@Injectable()
export class AuthentificationService {
  private helper = new JwtHelperService();
  private url: string = 'http://localhost:8000/filrouge';
  jwt: string;
  username: string;
  roles: Array<string>;

  constructor(private http: HttpClient, private router: Router) { }

  getToken(): string {
    return localStorage.getItem(TOKEN_NAME);
  }

  setToken(token: string): void {
    localStorage.setItem("token", token);
    this.jwt = token;
  }
  login(user) {
    return this.http.post<any>(`${this.url}/login`,user);
  }

  logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('roles');
    this.jwt=undefined;
    this.username=undefined;
    this.roles=undefined;
    this.router.navigateByUrl("/login")
  }

  isSuperAdmin(){
    
    return localStorage.getItem("roles").indexOf("ROLE_Super-Admin")>=0;
  }

  isCaissier(){
    
    return localStorage.getItem("roles").indexOf("ROLE_Caissier")>=0;
  }

  isPartener(){
    
    return localStorage.getItem("roles").indexOf("ROLE_Partenaire")>=0;
  }

  isAdminWari(){
    console.log(this.roles)
    return localStorage.getItem("roles").indexOf("ROLE_Wari")>=0;
  }

  isUser(){
    console.log(this.roles)
    return localStorage.getItem("roles").indexOf("ROLE_Utilisateur")>=0;
  }

  isAdminPartener(){
    
    return localStorage.getItem("roles").indexOf("ROLE_Admin-Partenaire")>=0;
  }

  isAuthenticated(){
    console.log(localStorage.getItem("role"))
    return localStorage.getItem("roles") && (this.isAdminWari() ||
     this.isAdminPartener() 
    || this.isCaissier() || this.isUser() ||
     this.isSuperAdmin() || this.isPartener());
  }

  isTokenExpired(token?: string): boolean {
    if(!token) token = this.getToken();
    this.helper.isTokenExpired(token);
    if(!token) return true;

    // const date = this.helper.getTokenExpirationDate(this.getToken()); 
  }

  
}
