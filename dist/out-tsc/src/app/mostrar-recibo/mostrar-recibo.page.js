import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
var MostrarReciboPage = /** @class */ (function () {
    function MostrarReciboPage(route, router) {
        this.route = route;
        this.router = router;
        this.sliderConfig = {};
    }
    MostrarReciboPage.prototype.ngOnInit = function () {
        var _this = this;
        if (this.route.snapshot.data['special']) {
            this.response = this.route.snapshot.data['special'];
        }
        this.data = this.response.datos;
        this.desglose = this.response.desglose;
        this.sueldoNeto = 0;
        this.asignaciones = 0;
        this.deducciones = 0;
        this.totalAsignaciones = 0;
        this.desglose.forEach(function (value) {
            _this.sueldoNeto = parseFloat(_this.sueldoNeto) + parseFloat(value.valsal);
        });
        this.desglose.forEach(function (value) {
            if (value.tipsal == 'A ') {
                _this.asignaciones = parseFloat(_this.asignaciones) + parseFloat(value.valsal);
                _this.totalAsignaciones = _this.number_format(_this.asignaciones, 2, ',', '.');
            }
        });
        this.desglose.forEach(function (value) {
            if (value.tipsal == 'P1') {
                _this.deducciones = parseFloat(_this.deducciones) + parseFloat(value.valsal);
                _this.totalDeducciones = _this.number_format(_this.deducciones * -1, 2, ',', '.');
            }
        });
        var num = this.sueldoNeto.toFixed(2);
        this.sueldoNeto = this.number_format(this.sueldoNeto, 2, ',', '.');
        //var cents = (num - Math.floor(num)).toFixed(2);
        //this.sueldoNeto = Math.floor(num).toLocaleString() + ',' + cents.split('.')[1];
    };
    MostrarReciboPage.prototype.number_format = function (number, decimals, dec_point, thousands_point) {
        if (number == null || !isFinite(number)) {
            throw new TypeError("number is not valid");
        }
        if (!decimals) {
            var len = number.toString().split('.').length;
            decimals = len > 1 ? len : 0;
        }
        if (!dec_point) {
            dec_point = '.';
        }
        if (!thousands_point) {
            thousands_point = ',';
        }
        number = parseFloat(number).toFixed(decimals);
        number = number.replace(".", dec_point);
        var splitNum = number.split(dec_point);
        splitNum[0] = splitNum[0].replace(/\B(?=(\d{3})+(?!\d))/g, thousands_point);
        number = splitNum.join(dec_point);
        return number;
    };
    MostrarReciboPage = tslib_1.__decorate([
        Component({
            selector: 'app-mostrar-recibo',
            templateUrl: './mostrar-recibo.page.html',
            styleUrls: ['./mostrar-recibo.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute, Router])
    ], MostrarReciboPage);
    return MostrarReciboPage;
}());
export { MostrarReciboPage };
//# sourceMappingURL=mostrar-recibo.page.js.map