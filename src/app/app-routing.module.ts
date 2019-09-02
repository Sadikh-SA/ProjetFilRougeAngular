import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthentificationComponent } from './authentification/authentification.component';
import { LoginComponent } from './login/login.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { PartenaireComponent } from './partenaire/partenaire.component';
import { TransactionComponent } from './transaction/transaction.component';
import { DepotComponent } from './depot/depot.component';

const routes: Routes = [
    { path: "login", component: LoginComponent},
    { path: "auth", component: AuthentificationComponent},
    { path: 'lister/user', component: UtilisateurComponent },
    { path: 'lister/partenaire', component: PartenaireComponent },
    { path: 'ajouter/admin/partenaire', component: UtilisateurComponent },
    { path: 'ajouter/partenaire', component: PartenaireComponent },
    { path: 'retirer/transaction', component: TransactionComponent },
    { path: 'ajouter/transaction', component: TransactionComponent },
    { path: 'depot', component: DepotComponent },
    { path: 'deconnexion', component: LoginComponent },
]


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }