import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PromoModalPageRoutingModule } from './promo-modal-routing.module';

import { PromoModalPage } from './promo-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PromoModalPageRoutingModule
  ],
  declarations: [PromoModalPage]
})
export class PromoModalPageModule {}
