import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailProductBlibliPageRoutingModule } from './detail-product-blibli-routing.module';

import { DetailProductBlibliPage } from './detail-product-blibli.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailProductBlibliPageRoutingModule
  ],
  declarations: [DetailProductBlibliPage]
})
export class DetailProductBlibliPageModule {}
