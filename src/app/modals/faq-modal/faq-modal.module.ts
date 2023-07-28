import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FaqModalPageRoutingModule } from './faq-modal-routing.module';

import { FaqModalPage } from './faq-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FaqModalPageRoutingModule
  ],
  declarations: [FaqModalPage]
})
export class FaqModalPageModule {}
