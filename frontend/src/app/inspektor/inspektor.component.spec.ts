import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspektorComponent } from './inspektor.component';

describe('InspektorComponent', () => {
  let component: InspektorComponent;
  let fixture: ComponentFixture<InspektorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InspektorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InspektorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
