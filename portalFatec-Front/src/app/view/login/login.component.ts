import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm !: UntypedFormGroup
  constructor(private router: Router, private formBuilder : UntypedFormBuilder, private http : HttpClient) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
    email:['', Validators.required],
    password:['', Validators.required]
  })
  }
  login(){
    this.http.get<any>("https://localhost:7076/api/Admin/")
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
      });
      if(user){
        alert("Login realizado com sucesso");
        this.loginForm.reset();
        this.router.navigate(['/admnoticia'])
      }else{
        alert("Usúario ou Senha inválido");
      }
    }, err=>{
      alert("Não foi possivel realizar")
    })
  }


}
