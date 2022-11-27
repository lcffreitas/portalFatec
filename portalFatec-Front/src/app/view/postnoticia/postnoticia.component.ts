import { Component, OnInit } from '@angular/core';
import { Noticia } from './Model/noticia';
import { PostnoticiaService } from './postnoticia.service';

@Component({
  selector: 'app-postnoticia',
  templateUrl: './postnoticia.component.html',
  styleUrls: ['./postnoticia.component.css']
})
export class PostnoticiaComponent implements OnInit {

  noticia:Noticia = new Noticia();
  noticias:Noticia[] = [];
  
  constructor(private noticiaService:PostnoticiaService) { }

  ngOnInit(): void {
    this.getTodasNoticias();
  }

  onSubmit() {
    let resposta = null;
    this.noticiaService.postNoticia(this.noticia).subscribe(data => resposta = data);
    //todo trocar por atualizar e não dar refresh na página
    //window.location.reload();
  }

  getTodasNoticias(){
    this.noticiaService.getTodasNoticias().subscribe((response:Noticia[]) => {
      this.noticias = response;
    });
  }

  excluirNoticia(id:string){
    this.noticiaService.deleteNoticia(id).subscribe();
    //todo trocar por atualizar e não dar refresh na página
    window.location.reload();
  }

  editarNoticia(id:string){
    this.noticiaService.getNoticia(id).subscribe((response:Noticia) => {
      console.log('response ',response);
      this.noticia = response;
    });
    console.log('get', this.noticia);
  }
}

