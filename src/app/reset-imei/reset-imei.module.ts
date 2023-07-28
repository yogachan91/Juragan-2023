import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResetImeiPageRoutingModule } from './reset-imei-routing.module';

import { ResetImeiPage } from './reset-imei.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResetImeiPageRoutingModule
  ],
  declarations: [ResetImeiPage]
})
export class ResetImeiPageModule {}
