
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './view/cadastro/cadastro.component';
import { HomeComponent } from './view/home/home.component';
import { Login2Component } from './view/login2/login2.component';
import { PostnoticiaComponent } from './view/postnoticia/postnoticia.component';

const routes: Routes = [{path: 'home',component:HomeComponent},
{path: 'cadastro',component:CadastroComponent},
{path: 'postnoticia',component: PostnoticiaComponent},
{path: 'login2',component:Login2Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
