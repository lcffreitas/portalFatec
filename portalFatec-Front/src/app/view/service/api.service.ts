import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  postCategory (data: any) {
    return this.http.post<any>("https://localhost:7076/api/Noticia", data)
  }
}
