import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { UrlService } from '../services/url.service';
import { HttpClient } from '@angular/common/http';
import { Platform } from '@ionic/angular';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { DocumentViewer } from '@ionic-native/document-viewer/ngx';
var ConstanciaPage = /** @class */ (function () {
    function ConstanciaPage(urlService, http, platform, file, ft, fileOpener, document) {
        this.urlService = urlService;
        this.http = http;
        this.platform = platform;
        this.file = file;
        this.ft = ft;
        this.fileOpener = fileOpener;
        this.document = document;
        this.storage = localStorage;
    }
    ConstanciaPage.prototype.ngOnInit = function () {
    };
    ConstanciaPage.prototype.create = function () {
        this.cedula = this.storage.getItem('cedula');
        this.http.post(this.urlService.getUrl() + '/api/constancia', { dirigido: this.dirigido, cedula: this.cedula }).subscribe(function (response) {
            console.log(response);
        });
    };
    ConstanciaPage.prototype.downloadAndOpenPdf = function () {
        /*let downloadUrl = "https://devdactic.com/html/5-simple-hacks-LBT.pdf"
        let path = this.file.dataDirectory()
        const transfer = this.ft.create()
    
        transfer.download(downloadUrl, `${path}myfile.pdf`).then(entry => {
          let url = entry.toURL()
    
          if(this.platform.is('android')){
            this.fileOpener.open(url, 'application/pdf')
          }
    
        })*/
    };
    ConstanciaPage = tslib_1.__decorate([
        Component({
            selector: 'app-constancia',
            templateUrl: './constancia.page.html',
            styleUrls: ['./constancia.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [UrlService, HttpClient, Platform, File, FileTransfer, FileOpener, DocumentViewer])
    ], ConstanciaPage);
    return ConstanciaPage;
}());
export { ConstanciaPage };
//# sourceMappingURL=constancia.page.js.map