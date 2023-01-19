import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyEagerComponent } from './lazy-eager.component';

describe('LazyEagerComponent', () => {
  let component: LazyEagerComponent;
  let fixture: ComponentFixture<LazyEagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazyEagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LazyEagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
