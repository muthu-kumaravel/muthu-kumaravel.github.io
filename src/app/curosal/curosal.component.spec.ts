import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurosalComponent } from './curosal.component';

describe('CurosalComponent', () => {
  let component: CurosalComponent;
  let fixture: ComponentFixture<CurosalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CurosalComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurosalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
