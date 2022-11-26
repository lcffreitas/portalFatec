import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Noticia } from './Model/noticia';

@Injectable({
  providedIn: 'root'
})
export class PostnoticiaService {

  private readonly API = 'https://localhost:7076/api/Noticia/GetLatestNews';  
  constructor(private http:HttpClient) { }

  getNoticias(){
    //return this.getNoticiasMock();
    return this.http.get<Noticia[]>(this.API);
  }

  getNoticiasMock() {
    let noticias:Noticia[] = [];
    let n1:Noticia = new Noticia();
    n1.id='1';
    n1.descricao ='desc1';
    n1.titulo = 'n1';

    let n2:Noticia = new Noticia();
    n2.id='2';
    n2.descricao ='desc2';
    n2.titulo = 'n2';

    noticias.push(n1,n2);

    return noticias;
  }


}
