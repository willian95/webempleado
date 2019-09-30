import { NgModule } from '@angular/core';
import { DataResolverService } from './resolver/data-resolver.service';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardPageModule' },
  { path: 'recibos-pago', loadChildren: './recibos-pago/recibos-pago.module#RecibosPagoPageModule' },
  { path: 'mostrar-recibo', loadChildren: './mostrar-recibo/mostrar-recibo.module#MostrarReciboPageModule' },
  { 
  	path: 'mostrar-recibo/:id',
  	resolve: {
  		special: DataResolverService
  	},
  	loadChildren: './mostrar-recibo/mostrar-recibo.module#MostrarReciboPageModule' 
  },
  { path: 'constancia', loadChildren: './constancia/constancia.module#ConstanciaPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
