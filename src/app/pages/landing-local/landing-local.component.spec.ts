import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingLocalComponent } from './landing-local.component';

describe('LandingLocalComponent', () => {
  let component: LandingLocalComponent;
  let fixture: ComponentFixture<LandingLocalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingLocalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
