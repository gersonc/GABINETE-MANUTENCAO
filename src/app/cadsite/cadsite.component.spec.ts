import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CadsiteComponent} from './cadsite.component';

describe('CadsiteComponent', () => {
  let component: CadsiteComponent;
  let fixture: ComponentFixture<CadsiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CadsiteComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
