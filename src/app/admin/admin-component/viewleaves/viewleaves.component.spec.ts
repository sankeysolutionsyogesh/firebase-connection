import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewleavesComponent } from './viewleaves.component';

describe('ViewleavesComponent', () => {
  let component: ViewleavesComponent;
  let fixture: ComponentFixture<ViewleavesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewleavesComponent]
    });
    fixture = TestBed.createComponent(ViewleavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
