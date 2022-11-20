import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DialogNoticiaComponent } from './dialog-noticia/dialog-noticia.component';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-postnoticia',
  templateUrl: './postnoticia.component.html',
  styleUrls: ['./postnoticia.component.css']
})
export class PostnoticiaComponent implements OnInit {
actionBtn: any;

  NoticiaForm: any;
  // fb: any;
  constructor(private dialog : MatDialog,) { }

  ngOnInit(): void {
// this.NoticiaForm = this.fb.gruop({

//  })
  }
  openDialog() {
    this.dialog.open(DialogNoticiaComponent, {
      width: '30%'
    }).afterClosed().subscribe(val=>{
      if(val ==='save'){
      }

    })
  }

  AddNoticia(){

  }
}

