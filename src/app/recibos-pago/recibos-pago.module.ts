import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RecibosPagoPage } from './recibos-pago.page';

const routes: Routes = [
  {
    path: '',
    component: RecibosPagoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RecibosPagoPage]
})
export class RecibosPagoPageModule {}
