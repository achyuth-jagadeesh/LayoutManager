import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateBoxComponent } from './template-box.component';

describe('TemplateBoxComponent', () => {
  let component: TemplateBoxComponent;
  let fixture: ComponentFixture<TemplateBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
