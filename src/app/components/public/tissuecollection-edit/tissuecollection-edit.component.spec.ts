import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TissuecollectionEditComponent } from './tissuecollection-edit.component';

describe('TissuecollectionEditComponent', () => {
  let component: TissuecollectionEditComponent;
  let fixture: ComponentFixture<TissuecollectionEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TissuecollectionEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TissuecollectionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
