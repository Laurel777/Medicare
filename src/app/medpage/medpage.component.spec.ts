import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedpageComponent } from './medpage.component';

describe('MedpageComponent', () => {
  let component: MedpageComponent;
  let fixture: ComponentFixture<MedpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
