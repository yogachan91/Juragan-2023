import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailBelanjaPageRoutingModule } from './detail-belanja-routing.module';

import { DetailBelanjaPage } from './detail-belanja.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailBelanjaPageRoutingModule
  ],
  declarations: [DetailBelanjaPage]
})
export class DetailBelanjaPageModule {}
