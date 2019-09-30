import * as tslib_1 from "tslib";
import { DataService } from './../services/data.service';
import { Injectable } from '@angular/core';
var DataResolverService = /** @class */ (function () {
    function DataResolverService(dataService) {
        this.dataService = dataService;
    }
    DataResolverService.prototype.resolve = function (route) {
        var id = route.paramMap.get('id');
        return this.dataService.getData(id);
    };
    DataResolverService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [DataService])
    ], DataResolverService);
    return DataResolverService;
}());
export { DataResolverService };
//# sourceMappingURL=data-resolver.service.js.map