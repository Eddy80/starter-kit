import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAdvFormComponent } from './edit-adv-form.component';

describe('EditAdvFormComponent', () => {
  let component: EditAdvFormComponent;
  let fixture: ComponentFixture<EditAdvFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAdvFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditAdvFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
