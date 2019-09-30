import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
var DataService = /** @class */ (function () {
    function DataService() {
        this.data = [];
    }
    DataService.prototype.setData = function (id, data) {
        this.data[id] = data;
    };
    DataService.prototype.getData = function (id) {
        return this.data[id];
    };
    DataService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], DataService);
    return DataService;
}());
export { DataService };
//# sourceMappingURL=data.service.js.map