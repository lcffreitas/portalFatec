import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { UntypedFormGroup, UntypedFormBuilder } from '@angular/forms';
=======
import { FormGroup, FormBuilder } from '@angular/forms';
>>>>>>> 1e473bc62b10c734c51f4ad3f38e1ced9dfac853
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  public noticia : any = [];
<<<<<<< HEAD
  public noticaForm!: UntypedFormGroup;
  constructor(
    private fb: UntypedFormBuilder,
=======
  public noticaForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
>>>>>>> 1e473bc62b10c734c51f4ad3f38e1ced9dfac853
  ) { }

  ngOnInit(): void {
    this.noticaForm = this.fb.group({

    })
  }

}
