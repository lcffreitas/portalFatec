import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-dialog-noticia',
  templateUrl: './dialog-noticia.component.html',
  styleUrls: ['./dialog-noticia.component.css']
})
export class DialogNoticiaComponent implements OnInit {
  noticiaForm !: UntypedFormGroup;
  actionBtn : string = "Salvar"
  constructor(private formBuilder : UntypedFormBuilder,
    private api : ApiService,
    @Inject(MAT_DIALOG_DATA) public editData : any,
    private dialogRef : MatDialogRef<DialogNoticiaComponent>) { }

  ngOnInit(): void {

  }
  AddProduct(){
  }

  inputChanges(files : FileList){
    
  }
}