import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProvedorComponent } from './add-provedor.component';

describe('AddProvedorComponent', () => {
  let component: AddProvedorComponent;
  let fixture: ComponentFixture<AddProvedorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProvedorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProvedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
