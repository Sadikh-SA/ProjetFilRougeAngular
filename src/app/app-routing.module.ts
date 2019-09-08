import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthentificationComponent } from './authentification/authentification.component';
import { LoginComponent } from './login/login.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { PartenaireComponent } from './partenaire/partenaire.component';
import { TransactionComponent } from './transaction/transaction.component';
import { DepotComponent } from './depot/depot.component';
import { CompteComponent } from './compte/compte.component';
import { ProfilComponent } from './profil/profil.component';

const routes: Routes = [
    { path: "login", component: LoginComponent},
    { path: "auth", component: AuthentificationComponent},
    { path: 'lister/user', component: UtilisateurComponent },
    { path: 'lister/partenaire', component: PartenaireComponent },
    { path: 'ajouter/utilisateur', component: UtilisateurComponent },
    { path: 'ajouter/partenaire', component: PartenaireComponent },
    { path: 'retirer/transaction', component: TransactionComponent },
    { path: 'ajouter/transaction', component: TransactionComponent },
    { path: 'depot', component: DepotComponent },
    { path: 'deconnexion', component: LoginComponent },
    { path: 'ajouter/compte', component: CompteComponent },
    { path: 'profil', component: ProfilComponent}
]


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }