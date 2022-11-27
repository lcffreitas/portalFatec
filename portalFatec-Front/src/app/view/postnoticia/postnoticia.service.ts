import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Noticia } from './Model/noticia';

@Injectable({
  providedIn: 'root'
})
export class PostnoticiaService {

  private readonly baseURL = 'https://localhost:7076/api/'
  private readonly getLatestURL = this.baseURL + 'Noticia/GetLatestNews';
  private readonly getTodasNoticiasURL = this.baseURL + 'Noticia';
  private readonly getNoticiaURL = this.baseURL + 'Noticia/';
  private readonly deleteURL = this.baseURL + 'Noticia/';
  private readonly updateURL = this.baseURL + 'Noticia/';
  private readonly postURL = this.baseURL + 'Noticia';

  constructor(private http:HttpClient) { }

  getUltimasNoticias(){
    return this.http.get<Noticia[]>(this.getLatestURL);
  }

  postNoticia(noticia:Noticia){
    if (noticia.id)
      return this.http.put(this.updateURL+noticia.id, noticia);
    return this.http.post(this.postURL, noticia);
  }

  getTodasNoticias(){
    return this.http.get<Noticia[]>(this.getTodasNoticiasURL);
  }

  deleteNoticia(id:string){
    return this.http.delete(this.deleteURL+id);
  }

  getNoticia(id:string){
    return this.http.get<Noticia>(this.getNoticiaURL+id);
  }

}
