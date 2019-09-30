import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import { UrlService } from '../services/url.service';
var HomePage = /** @class */ (function () {
    function HomePage(router, http, alertController, urlService) {
        this.router = router;
        this.http = http;
        this.alertController = alertController;
        this.urlService = urlService;
        this.storage = localStorage;
    }
    HomePage.prototype.presentAlert = function (errorMessage, type) {
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
    HomePage.prototype.login = function () {
        var _this = this;
        //this.storage.setItem('name', '');
        //this.storage.setItem('cedula', '');
        //this.storage.setItem('id', '');	
        this.storage.clear();
        this.http.post(this.urlService.getUrl() + '/api/login', { cedula: this.cedula, clave: this.password }).subscribe(function (response) {
            if (response.error == true) {
                _this.presentAlert(response.message, 'Error');
                _this.password = "";
            }
            else {
                //console.log(response.data)
                localStorage.setItem('name', response.nombre_usuario);
                localStorage.setItem('cedula', _this.cedula);
                _this.cedula = "";
                _this.password = "";
                _this.router.navigateByUrl('/dashboard');
            }
        });
    };
    HomePage = tslib_1.__decorate([
        Component({
            selector: 'app-home',
            templateUrl: 'home.page.html',
            styleUrls: ['home.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router, HttpClient, AlertController, UrlService])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.page.js.map