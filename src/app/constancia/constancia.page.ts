import { Component, OnInit } from '@angular/core';
import { UrlService } from '../services/url.service';
import { HttpClientModule } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Platform } from '@ionic/angular';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import {File} from '@ionic-native/file/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { DocumentViewer } from '@ionic-native/document-viewer/ngx';

@Component({
  selector: 'app-constancia',
  templateUrl: './constancia.page.html',
  styleUrls: ['./constancia.page.scss'],
})
export class ConstanciaPage implements OnInit {
	
  dirigido:any
  storage:any
  cedula:any

  constructor(private urlService: UrlService, private http: HttpClient, private platform: Platform, private file: File, private ft: FileTransfer, private fileOpener: FileOpener, private document: DocumentViewer) { 
    this.storage = localStorage
  }

  ngOnInit() {
  }

  create(){

    this.cedula = this.storage.getItem('cedula')
    
  	this.http.post(this.urlService.getUrl()+'/api/constancia', {dirigido: this.dirigido, cedula: this.cedula}).subscribe((response: any) => {

      console.log(response)

    });

  }

  downloadAndOpenPdf(){

    /*let downloadUrl = "https://devdactic.com/html/5-simple-hacks-LBT.pdf"
    let path = this.file.dataDirectory()
    const transfer = this.ft.create()

    transfer.download(downloadUrl, `${path}myfile.pdf`).then(entry => {
      let url = entry.toURL()

      if(this.platform.is('android')){
        this.fileOpener.open(url, 'application/pdf')
      }

    })*/

  }

}
