import { Component } from '@angular/core';
import { AuthentificationService } from './authentification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FilRougeAngular';

  constructor(private authService: AuthentificationService) {}


  isSuperAdmin(){
    return this.authService.isSuperAdmin();
  }

  isCaissier(){
    return this.authService.isCaissier();
  }

  isPartener(){
    return this.authService.isPartener();
  }

  isAdminWari(){
    return this.authService.isAdminWari();
  }

  isUser(){
    return this.authService.isUser();
  }

  isAdminPartener(){
    return this.authService.isAdminPartener();
  }

  isAuthenticated(){
    return this.authService.isAuthenticated();
  }
}
