import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalNotifPageRoutingModule } from './modal-notif-routing.module';

import { ModalNotifPage } from './modal-notif.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalNotifPageRoutingModule
  ],
  declarations: [ModalNotifPage]
})
export class ModalNotifPageModule {}
