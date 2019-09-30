import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
var BsPipe = /** @class */ (function () {
    function BsPipe() {
    }
    BsPipe.prototype.transform = function (value, args) {
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        ;
    };
    BsPipe = tslib_1.__decorate([
        Pipe({
            name: 'bs'
        })
    ], BsPipe);
    return BsPipe;
}());
export { BsPipe };
//# sourceMappingURL=bs.pipe.js.map