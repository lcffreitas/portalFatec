import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DialogNoticiaComponent } from './dialog-noticia/dialog-noticia.component';


describe('DialogNoticiaComponent', () => {
  let component: DialogNoticiaComponent;
  let fixture: ComponentFixture<DialogNoticiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogNoticiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogNoticiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
