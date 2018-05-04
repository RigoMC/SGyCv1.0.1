import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpedComponent } from './addped.component';

describe('AddpedComponent', () => {
  let component: AddpedComponent;
  let fixture: ComponentFixture<AddpedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddpedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddpedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
