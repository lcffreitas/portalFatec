import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder } from '@angular/forms';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  public noticia : any = [];
  public noticaForm!: UntypedFormGroup;
  constructor(
    private fb: UntypedFormBuilder,
  ) { }

  ngOnInit(): void {
    this.noticaForm = this.fb.group({

    })
  }

}
