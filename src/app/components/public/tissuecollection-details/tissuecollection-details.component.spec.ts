import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TissuecollectionDetailsComponent } from './tissuecollection-details.component';

describe('TissuecollectionDetailsComponent', () => {
  let component: TissuecollectionDetailsComponent;
  let fixture: ComponentFixture<TissuecollectionDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TissuecollectionDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TissuecollectionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
