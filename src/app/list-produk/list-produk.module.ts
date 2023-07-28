import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListProdukPageRoutingModule } from './list-produk-routing.module';

import { ListProdukPage } from './list-produk.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListProdukPageRoutingModule
  ],
  declarations: [ListProdukPage]
})
export class ListProdukPageModule {}
