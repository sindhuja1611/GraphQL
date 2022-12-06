import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditstudComponent } from './editstud.component';

describe('EditstudComponent', () => {
  let component: EditstudComponent;
  let fixture: ComponentFixture<EditstudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditstudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditstudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
