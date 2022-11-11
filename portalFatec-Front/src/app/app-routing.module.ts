import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './view/cadastro/cadastro.component';
import { HomeComponent } from './view/home/home.component';
import { LoginComponent } from './view/login/login.component';
import { UpNoticiasComponent } from './view/up-noticias/up-noticias.component';

const routes: Routes = [{path: 'home',component:HomeComponent},
{path: 'login',component:LoginComponent}, {path: 'cadastro',component:CadastroComponent}, {path: 'up-noticias',component:UpNoticiasComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
