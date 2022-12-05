import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoorbellPage } from './doorbell.page';

const routes: Routes = [
  {
    path: '',
    component: DoorbellPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoorbellPageRoutingModule {}
