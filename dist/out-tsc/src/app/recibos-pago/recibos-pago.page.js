import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';
import { UrlService } from '../services/url.service';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../services/data.service';
import { AlertController } from '@ionic/angular';
var RecibosPagoPage = /** @class */ (function () {
    function RecibosPagoPage(router, cdr, urlService, http, alertController, dataService) {
        this.router = router;
        this.cdr = cdr;
        this.urlService = urlService;
        this.http = http;
        this.alertController = alertController;
        this.dataService = dataService;
        this.years = new Array();
        this.storage = localStorage;
        this.name = this.storage.getItem('name');
    }
    RecibosPagoPage.prototype.ngOnInit = function () {
        var d = new Date();
        this.currentYear = new Date().getFullYear();
        this.months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
        this.currentMonth = d.getMonth();
        this.currentDay = d.getDay();
        //.getPersonalFirstYEar()
        var startingYear = 2013; //this.firstDate.substring(0, 4)
        for (var i = startingYear; i <= this.currentYear; i++) {
            this.years.push(i);
        }
    };
    RecibosPagoPage.prototype.presentAlert = function (errorMessage, type) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: type,
                            message: errorMessage,
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RecibosPagoPage.prototype.selectYear = function () {
        /*this.months = new Array();
  
        if(this.selectedYear >= this.currentYear){
          
          var d = new Date();
          this.currentMonth = d.getMonth();
  
          for(var i = 0; i <= this.currentMonth; i++){
            
            this.zone.run(() => {
              this.months.push(this.monthsList[i])
            });
          }
  
        }else{
          this.months = this.months
        }
  
        this.cdr.detectChanges();*/
    };
    RecibosPagoPage.prototype.selectMonth = function () {
        console.log(this.selectedMonth);
    };
    RecibosPagoPage.prototype.selectPeriod = function () {
        console.log(this.selectedPeriod);
    };
    RecibosPagoPage.prototype.getPersonalFirstYEar = function () {
        var _this = this;
        this.http.get(this.urlService.getUrl() + '/api/personal/first/year/' + this.storage.getItem('cedula')).subscribe(function (response) {
            _this.firstDate = response.firstYear[0].fecingper;
        });
    };
    RecibosPagoPage.prototype.create = function () {
        var _this = this;
        if (this.selectedPeriod == 1) {
            this.day = 15;
        }
        else {
            if (this.selectedMonth == 1) {
                this.day = 28;
            }
            else {
                this.day = 30;
            }
        }
        this.http.post(this.urlService.getUrl() + '/api/recibo', { year: this.selectedYear, month: this.selectedMonth, day: this.day, cedula: this.storage.getItem('cedula') }).subscribe(function (response) {
            //this.presentAlert(response[0].sueper)
            //console.log(response)
            if (response.desglose.length <= 0) {
                _this.presentAlert("No existen registros para esta nomina", 'Error');
            }
            else {
                _this.dataService.setData(42, response);
                _this.router.navigateByUrl('/mostrar-recibo/42');
            }
        });
    };
    RecibosPagoPage.prototype.goBack = function () {
        this.router.navigateByUrl('/dashboard');
    };
    RecibosPagoPage = tslib_1.__decorate([
        Component({
            selector: 'app-recibos-pago',
            templateUrl: './recibos-pago.page.html',
            styleUrls: ['./recibos-pago.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router, ChangeDetectorRef, UrlService, HttpClient, AlertController, DataService])
    ], RecibosPagoPage);
    return RecibosPagoPage;
}());
export { RecibosPagoPage };
//# sourceMappingURL=recibos-pago.page.js.map