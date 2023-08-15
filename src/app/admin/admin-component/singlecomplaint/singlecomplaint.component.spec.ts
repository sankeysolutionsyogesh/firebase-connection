import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglecomplaintComponent } from './singlecomplaint.component';

describe('SinglecomplaintComponent', () => {
  let component: SinglecomplaintComponent;
  let fixture: ComponentFixture<SinglecomplaintComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SinglecomplaintComponent]
    });
    fixture = TestBed.createComponent(SinglecomplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
