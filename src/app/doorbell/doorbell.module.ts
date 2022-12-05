import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoorbellPageRoutingModule } from './doorbell-routing.module';

import { DoorbellPage } from './doorbell.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoorbellPageRoutingModule
  ],
  declarations: [DoorbellPage]
})
export class DoorbellPageModule {}
