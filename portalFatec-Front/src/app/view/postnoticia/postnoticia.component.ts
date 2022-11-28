import { Component, OnInit } from '@angular/core';
import { Noticia } from './Model/noticia';
import { PostnoticiaService } from './postnoticia.service';

@Component({
  selector: 'app-postnoticia',
  templateUrl: './postnoticia.component.html',
  styleUrls: ['./postnoticia.component.css']
})
export class PostnoticiaComponent implements OnInit {

  noticia: Noticia = new Noticia();
  noticias: Noticia[] = [];

  constructor(private noticiaService: PostnoticiaService) { }

  ngOnInit(): void {
    this.getTodasNoticias();
  }

  onSubmit() {
    this.noticiaService.postNoticia(this.noticia).subscribe({
      next: (v) => this.postSucesso(v),
      error: (e) => this.postFalha(e),
      complete: () => console.info('complete')
    });
  }

  postSucesso(resposta: any) {
    alert('operação realizada com sucesso!');
    window.location.reload();
  }

  postFalha(resposta: any) {
    alert('erro ao cadastrar notícia.');
  }

  getTodasNoticias() {
    this.noticiaService.getTodasNoticias().subscribe((response: Noticia[]) => {
      this.noticias = response;
    });
  }

  excluirNoticia(id: string) {
    this.noticiaService.deleteNoticia(id).subscribe({
      next: (v) => this.postSucesso(v),
      error: (e) => this.postFalha(e),
      complete: () => console.info('complete')
    });
  }

  editarNoticia(id: string) {
    this.noticiaService.getNoticia(id).subscribe((response: Noticia) => {
      console.log('response ', response);
      this.noticia = response;
    });
    console.log('get', this.noticia);
  }
}

