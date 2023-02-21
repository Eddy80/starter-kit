import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAdvFormComponent } from './new-adv-form.component';

describe('NewAdvFormComponent', () => {
  let component: NewAdvFormComponent;
  let fixture: ComponentFixture<NewAdvFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewAdvFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewAdvFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
