import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
var DashboardPage = /** @class */ (function () {
    function DashboardPage(router) {
        this.router = router;
        this.storage = localStorage;
    }
    DashboardPage.prototype.ngOnInit = function () {
        if (localStorage.getItem('name')) {
            this.name = this.storage.getItem('name');
        }
    };
    DashboardPage.prototype.goToRecibosPago = function () {
        this.router.navigateByUrl('/recibos-pago');
    };
    DashboardPage.prototype.goToConstancia = function () {
        this.router.navigateByUrl('/constancia');
    };
    DashboardPage.prototype.logout = function () {
        this.storage.setItem('name', '');
        this.storage.setItem('cedula', '');
        this.storage.setItem('id', '');
        this.router.navigateByUrl('/');
    };
    DashboardPage = tslib_1.__decorate([
        Component({
            selector: 'app-dashboard',
            templateUrl: './dashboard.page.html',
            styleUrls: ['./dashboard.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], DashboardPage);
    return DashboardPage;
}());
export { DashboardPage };
//# sourceMappingURL=dashboard.page.js.map