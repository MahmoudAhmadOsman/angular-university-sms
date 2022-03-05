import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDetailsModalComponent } from './student-details-modal.component';

describe('StudentDetailsModalComponent', () => {
  let component: StudentDetailsModalComponent;
  let fixture: ComponentFixture<StudentDetailsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentDetailsModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentDetailsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
