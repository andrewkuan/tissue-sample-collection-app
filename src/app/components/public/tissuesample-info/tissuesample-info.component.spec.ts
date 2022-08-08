import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TissuesampleInfoComponent } from './tissuesample-info.component';

describe('TissuesampleInfoComponent', () => {
  let component: TissuesampleInfoComponent;
  let fixture: ComponentFixture<TissuesampleInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TissuesampleInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TissuesampleInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
