import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerlistComponent } from './computerlist.component';

describe('ComputerlistComponent', () => {
  let component: ComputerlistComponent;
  let fixture: ComponentFixture<ComputerlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComputerlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputerlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
