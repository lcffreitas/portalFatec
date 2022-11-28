import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  private readonly baseURL = 'https://localhost:7076/api/'
  

  constructor() { }
}
