import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TopDetailPageRoutingModule } from './top-detail-routing.module';

import { TopDetailPage } from './top-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TopDetailPageRoutingModule
  ],
  declarations: [TopDetailPage]
})
export class TopDetailPageModule {}
