import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLayoutManagerComponent } from './main-layout-manager.component';

describe('MainLayoutManagerComponent', () => {
  let component: MainLayoutManagerComponent;
  let fixture: ComponentFixture<MainLayoutManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainLayoutManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainLayoutManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
