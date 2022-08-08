import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TissuecollectionInfoComponent } from './tissuecollection-info.component';

describe('TissuecollectionInfoComponent', () => {
  let component: TissuecollectionInfoComponent;
  let fixture: ComponentFixture<TissuecollectionInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TissuecollectionInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TissuecollectionInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
