import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TissuesampleNewComponent } from './tissuesample-new.component';

describe('TissuesampleNewComponent', () => {
  let component: TissuesampleNewComponent;
  let fixture: ComponentFixture<TissuesampleNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TissuesampleNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TissuesampleNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
