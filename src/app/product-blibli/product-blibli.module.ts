import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductBlibliPageRoutingModule } from './product-blibli-routing.module';

import { ProductBlibliPage } from './product-blibli.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductBlibliPageRoutingModule
  ],
  declarations: [ProductBlibliPage]
})
export class ProductBlibliPageModule {}
