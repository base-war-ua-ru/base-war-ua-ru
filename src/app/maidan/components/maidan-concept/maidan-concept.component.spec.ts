import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaidanConceptComponent } from './maidan-concept.component';

describe('MaidanConceptComponent', () => {
  let component: MaidanConceptComponent;
  let fixture: ComponentFixture<MaidanConceptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaidanConceptComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MaidanConceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
