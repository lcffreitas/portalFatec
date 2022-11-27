import { Component, OnInit } from '@angular/core';
import { Noticia } from '../postnoticia/Model/noticia';
import { PostnoticiaService } from '../postnoticia/postnoticia.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  noticias: Noticia[] = [];

  constructor(private noticiaService: PostnoticiaService) { }

  ngOnInit(): void {
    this.getNoticias();
  }

  getNoticias(){
    this.noticiaService.getUltimasNoticias().subscribe((response:Noticia[]) => {
      this.noticias = response;
    });
  }

}
