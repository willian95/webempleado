import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { DataResolverService } from './resolver/data-resolver.service';
import { PreloadAllModules, RouterModule } from '@angular/router';
var routes = [
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
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [
                RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
            ],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map