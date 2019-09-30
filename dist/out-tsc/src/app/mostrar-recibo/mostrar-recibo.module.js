import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MostrarReciboPage } from './mostrar-recibo.page';
var routes = [
    {
        path: '',
        component: MostrarReciboPage
    }
];
var MostrarReciboPageModule = /** @class */ (function () {
    function MostrarReciboPageModule() {
    }
    MostrarReciboPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [MostrarReciboPage]
        })
    ], MostrarReciboPageModule);
    return MostrarReciboPageModule;
}());
export { MostrarReciboPageModule };
//# sourceMappingURL=mostrar-recibo.module.js.map