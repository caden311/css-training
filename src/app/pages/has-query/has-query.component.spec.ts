import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HasQueryComponent } from './has-query.component';

describe('HasQueryComponent', () => {
  let component: HasQueryComponent;
  let fixture: ComponentFixture<HasQueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HasQueryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HasQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
