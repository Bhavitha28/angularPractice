import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyordersRoutingModule } from './lazyorders-routing.module';
import { ProductComponent } from './product/product.component';

console.log("lazyorders module loading")
@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    CommonModule,
    LazyordersRoutingModule
  ],
  exports: [ProductComponent]
})
export class LazyordersModule { }
