import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedaddComponent } from './medadd.component';

describe('MedaddComponent', () => {
  let component: MedaddComponent;
  let fixture: ComponentFixture<MedaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedaddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
