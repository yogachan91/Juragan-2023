import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RiwayatTransaksiPageRoutingModule } from './riwayat-transaksi-routing.module';

import { RiwayatTransaksiPage } from './riwayat-transaksi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RiwayatTransaksiPageRoutingModule
  ],
  declarations: [RiwayatTransaksiPage]
})
export class RiwayatTransaksiPageModule {}
