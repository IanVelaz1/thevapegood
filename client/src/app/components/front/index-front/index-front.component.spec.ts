import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexFrontComponent } from './index-front.component';

describe('IndexFrontComponent', () => {
  let component: IndexFrontComponent;
  let fixture: ComponentFixture<IndexFrontComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexFrontComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
