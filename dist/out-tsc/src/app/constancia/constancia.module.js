import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ConstanciaPage } from './constancia.page';
var routes = [
    {
        path: '',
        component: ConstanciaPage
    }
];
var ConstanciaPageModule = /** @class */ (function () {
    function ConstanciaPageModule() {
    }
    ConstanciaPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ConstanciaPage]
        })
    ], ConstanciaPageModule);
    return ConstanciaPageModule;
}());
export { ConstanciaPageModule };
//# sourceMappingURL=constancia.module.js.map