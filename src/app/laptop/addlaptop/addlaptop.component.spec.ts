import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddlaptopComponent } from './addlaptop.component';

describe('AddlaptopComponent', () => {
  let component: AddlaptopComponent;
  let fixture: ComponentFixture<AddlaptopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddlaptopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddlaptopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
