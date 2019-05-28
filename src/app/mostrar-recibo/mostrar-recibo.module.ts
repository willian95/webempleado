import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MostrarReciboPage } from './mostrar-recibo.page';

const routes: Routes = [
  {
    path: '',
    component: MostrarReciboPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MostrarReciboPage]
})
export class MostrarReciboPageModule {}
