import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdaterecipeComponent } from './updaterecipe.component';

describe('UpdaterecipeComponent', () => {
  let component: UpdaterecipeComponent;
  let fixture: ComponentFixture<UpdaterecipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdaterecipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdaterecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
