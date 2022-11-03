import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpNoticiasComponent } from './up-noticias.component';

describe('UpNoticiasComponent', () => {
  let component: UpNoticiasComponent;
  let fixture: ComponentFixture<UpNoticiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpNoticiasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpNoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
