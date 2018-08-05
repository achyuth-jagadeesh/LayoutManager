import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingTemplateManagerComponent } from './existing-template-manager.component';

describe('ExistingTemplateManagerComponent', () => {
  let component: ExistingTemplateManagerComponent;
  let fixture: ComponentFixture<ExistingTemplateManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExistingTemplateManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExistingTemplateManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
