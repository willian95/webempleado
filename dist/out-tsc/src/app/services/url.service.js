import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
var UrlService = /** @class */ (function () {
    function UrlService() {
    }
    UrlService.prototype.getUrl = function () {
        return "http://beta-webempleadov2.vtelca.gob.ve";
        //return "http://localhost:8000";
    };
    UrlService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], UrlService);
    return UrlService;
}());
export { UrlService };
//# sourceMappingURL=url.service.js.map