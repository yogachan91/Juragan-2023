import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BelanjaModalPageRoutingModule } from './belanja-modal-routing.module';

import { BelanjaModalPage } from './belanja-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BelanjaModalPageRoutingModule
  ],
  declarations: [BelanjaModalPage]
})
export class BelanjaModalPageModule {}
