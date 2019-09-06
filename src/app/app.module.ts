import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthentificationService } from './authentification.service';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { PartenaireComponent } from './partenaire/partenaire.component';
import { TransactionComponent } from './transaction/transaction.component';
import { DepotComponent } from './depot/depot.component';
import { CompteComponent } from './compte/compte.component';
import { ProfilComponent } from './profil/profil.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AuthentificationComponent,
    UtilisateurComponent,
    PartenaireComponent,
    TransactionComponent,
    DepotComponent,
    CompteComponent,
    ProfilComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AuthentificationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
