import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TissuecollectionNewComponent } from './tissuecollection-new.component';

describe('TissuecollectionNewComponent', () => {
  let component: TissuecollectionNewComponent;
  let fixture: ComponentFixture<TissuecollectionNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TissuecollectionNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TissuecollectionNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
