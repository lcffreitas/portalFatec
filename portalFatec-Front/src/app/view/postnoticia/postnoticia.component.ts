import { Component, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

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

  AddNoticia(){
    
  }
}

