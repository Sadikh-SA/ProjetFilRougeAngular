import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthentificationComponent } from './authentification/authentification.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    { path: "login", component: LoginComponent},
    { path: "auth", component: AuthentificationComponent},
]


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }