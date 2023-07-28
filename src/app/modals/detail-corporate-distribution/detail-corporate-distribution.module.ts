import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailCorporateDistributionPageRoutingModule } from './detail-corporate-distribution-routing.module';

import { DetailCorporateDistributionPage } from './detail-corporate-distribution.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailCorporateDistributionPageRoutingModule
  ],
  declarations: [DetailCorporateDistributionPage]
})
export class DetailCorporateDistributionPageModule {}
