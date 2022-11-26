import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostnoticiaComponent } from './postnoticia.component';


describe('DialogNoticiaComponent', () => {
  let component: PostnoticiaComponent;
  let fixture: ComponentFixture<PostnoticiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostnoticiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostnoticiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
