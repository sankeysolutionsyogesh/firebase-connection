import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentLeavesComponent } from './student-leaves.component';

describe('StudentLeavesComponent', () => {
  let component: StudentLeavesComponent;
  let fixture: ComponentFixture<StudentLeavesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentLeavesComponent]
    });
    fixture = TestBed.createComponent(StudentLeavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
