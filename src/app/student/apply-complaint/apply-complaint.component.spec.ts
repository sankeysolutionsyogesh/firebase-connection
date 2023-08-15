import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyComplaintComponent } from './apply-complaint.component';

describe('ApplyComplaintComponent', () => {
  let component: ApplyComplaintComponent;
  let fixture: ComponentFixture<ApplyComplaintComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApplyComplaintComponent]
    });
    fixture = TestBed.createComponent(ApplyComplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
