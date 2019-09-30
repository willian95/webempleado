import { TestBed } from '@angular/core/testing';
import { UrlService } from './url.service';
describe('UrlService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(UrlService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=url.service.spec.js.map