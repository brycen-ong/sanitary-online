import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardBaseComponent } from './product-card-base.component';

describe('ProductCardBaseComponent', () => {
  let component: ProductCardBaseComponent;
  let fixture: ComponentFixture<ProductCardBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductCardBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCardBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
