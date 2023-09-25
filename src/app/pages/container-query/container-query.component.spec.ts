import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerQueryComponent } from './container-query.component';

describe('ContainerQueryComponent', () => {
  let component: ContainerQueryComponent;
  let fixture: ComponentFixture<ContainerQueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerQueryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
