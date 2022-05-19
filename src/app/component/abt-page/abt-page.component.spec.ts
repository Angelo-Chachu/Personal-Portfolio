import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbtPageComponent } from './abt-page.component';

describe('AbtPageComponent', () => {
  let component: AbtPageComponent;
  let fixture: ComponentFixture<AbtPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbtPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbtPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
