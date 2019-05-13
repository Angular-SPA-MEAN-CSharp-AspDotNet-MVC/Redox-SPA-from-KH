import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleSourceComponent } from './single-source.component';

describe('SingleSourceComponent', () => {
  let component: SingleSourceComponent;
  let fixture: ComponentFixture<SingleSourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleSourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleSourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
