import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StatusHadiahPageRoutingModule } from './status-hadiah-routing.module';

import { StatusHadiahPage } from './status-hadiah.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StatusHadiahPageRoutingModule
  ],
  declarations: [StatusHadiahPage]
})
export class StatusHadiahPageModule {}
