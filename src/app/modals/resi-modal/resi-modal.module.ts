import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResiModalPageRoutingModule } from './resi-modal-routing.module';

import { ResiModalPage } from './resi-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResiModalPageRoutingModule
  ],
  declarations: [ResiModalPage]
})
export class ResiModalPageModule {}
