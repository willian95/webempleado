import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { RecibosPagoPage } from './recibos-pago.page';
var routes = [
    {
        path: '',
        component: RecibosPagoPage
    }
];
var RecibosPagoPageModule = /** @class */ (function () {
    function RecibosPagoPageModule() {
    }
    RecibosPagoPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [RecibosPagoPage]
        })
    ], RecibosPagoPageModule);
    return RecibosPagoPageModule;
}());
export { RecibosPagoPageModule };
//# sourceMappingURL=recibos-pago.module.js.map