import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KandidatComponent } from './kandidat.component';

describe('KandidatComponent', () => {
  let component: KandidatComponent;
  let fixture: ComponentFixture<KandidatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KandidatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KandidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
