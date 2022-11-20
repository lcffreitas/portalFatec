import { Component, Inject, OnInit } from '@angular/core';
<<<<<<< HEAD
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
=======
import { FormBuilder, FormGroup } from '@angular/forms';
>>>>>>> 1e473bc62b10c734c51f4ad3f38e1ced9dfac853
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-dialog-noticia',
  templateUrl: './dialog-noticia.component.html',
  styleUrls: ['./dialog-noticia.component.css']
})
export class DialogNoticiaComponent implements OnInit {
<<<<<<< HEAD
  noticiaForm !: UntypedFormGroup;
  actionBtn : string = "Salvar"
  constructor(private formBuilder : UntypedFormBuilder,
=======
  noticiaForm !: FormGroup;
  actionBtn : string = "Salvar"
  constructor(private formBuilder : FormBuilder,
>>>>>>> 1e473bc62b10c734c51f4ad3f38e1ced9dfac853
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
