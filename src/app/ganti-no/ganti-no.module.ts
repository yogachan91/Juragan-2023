import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GantiNoPageRoutingModule } from './ganti-no-routing.module';

import { GantiNoPage } from './ganti-no.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GantiNoPageRoutingModule
  ],
  declarations: [GantiNoPage]
})
export class GantiNoPageModule {}
