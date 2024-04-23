import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OuputPropertyComponent } from './ouput-property.component';

describe('OuputPropertyComponent', () => {
  let component: OuputPropertyComponent;
  let fixture: ComponentFixture<OuputPropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OuputPropertyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OuputPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
