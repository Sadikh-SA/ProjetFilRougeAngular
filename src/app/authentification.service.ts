import { HttpClient, } from '@angular/common/http';
import { JwtHelperService } from "@auth0/angular-jwt";
import { from, Subscriber } from 'rxjs';
import { Injectable } from '@angular/core';


export const TOKEN_NAME: string = 'token';
//const helper = new JwtHelperService();
@Injectable()
export class AuthentificationService {
  private helper = new JwtHelperService();
  private url: string = 'http://localhost:8000/filrouge';
  jwt: string;
  username: string;
  roles: Array<string>;

  constructor(private http: HttpClient) { }

  getToken(): string {
    return localStorage.getItem(TOKEN_NAME);
  }

  setToken(token: string): void {
    localStorage.setItem(TOKEN_NAME, token);
  }
  login(user) {
    return this.http.post<any>(`${this.url}/login`,user);
  }

  isTokenExpired(token?: string): boolean {
    if(!token) token = this.getToken();
    this.helper.isTokenExpired(token);
    if(!token) return true;

    // const date = this.helper.getTokenExpirationDate(this.getToken());
     
    
  }

  
}
