import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotifListPageRoutingModule } from './notif-list-routing.module';

import { NotifListPage } from './notif-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotifListPageRoutingModule
  ],
  declarations: [NotifListPage]
})
export class NotifListPageModule {}
