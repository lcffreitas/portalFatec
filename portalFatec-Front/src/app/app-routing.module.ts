
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './view/cadastro/cadastro.component';
import { HomeComponent } from './view/home/home.component';
import { LoginComponent } from './view/login/login.component';
import { PostnoticiaComponent } from './view/postnoticia/postnoticia.component';

const routes: Routes = [{path: '',component:HomeComponent},
{path: 'login',component:LoginComponent},
{path: 'cadastro',component:CadastroComponent},
{path: 'cadastronoticia',component: PostnoticiaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
