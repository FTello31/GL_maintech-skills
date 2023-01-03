import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OopPrototypesComponent } from './oop-prototypes.component';

describe('OopPrototypesComponent', () => {
  let component: OopPrototypesComponent;
  let fixture: ComponentFixture<OopPrototypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OopPrototypesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OopPrototypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
