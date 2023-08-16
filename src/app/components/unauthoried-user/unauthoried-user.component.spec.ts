import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnauthoriedUserComponent } from './unauthoried-user.component';

describe('UnauthoriedUserComponent', () => {
  let component: UnauthoriedUserComponent;
  let fixture: ComponentFixture<UnauthoriedUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnauthoriedUserComponent]
    });
    fixture = TestBed.createComponent(UnauthoriedUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
