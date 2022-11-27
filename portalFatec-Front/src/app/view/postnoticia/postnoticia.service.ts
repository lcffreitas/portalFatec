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
    return this.http.get<Noticia[]>(this.API);
  }

}
