import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';
import { UrlService } from '../services/url.service';

import { HttpClientModule } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { DataService } from '../services/data.service';

import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recibos-pago',
  templateUrl: './recibos-pago.page.html',
  styleUrls: ['./recibos-pago.page.scss'],
})
export class RecibosPagoPage implements OnInit {
	
	name: ""
  months:any
  storage:any
  public years:Array<any> = new Array(); 
  public monthsList:Array<string>
  selectedYear:any
  selectedMonth:any
  selectedPeriod:any
  currentYear:any
  currentMonth:any
  currentMonthNumber:any
  currentDay:any
  day:any
  
  constructor(private router: Router, public cdr: ChangeDetectorRef, private urlService: UrlService, private http: HttpClient, public alertController: AlertController, private dataService: DataService){ 
    this.storage = localStorage
    this.name = this.storage.getItem('name')
  }

  ngOnInit() {

    var d = new Date();
    this.currentYear = new Date().getFullYear();
    this.months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
    this.currentMonth = d.getMonth();
    this.currentDay = d.getDay();

    for(var i = 2013; i <= this.currentYear; i++){
      this.years.push(i)
    }

  }

  async presentAlert(errorMessage, type) {
      const alert = await this.alertController.create({
        header: type,
        message: errorMessage,
        buttons: ['OK']
      });

      await alert.present();
    }

  selectYear(){
      
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
      

  }

  selectMonth(){

    console.log(this.selectedMonth)

  }

  selectPeriod(){

    console.log(this.selectedPeriod)

  }

  create(){

    if(this.selectedPeriod == 1){
      this.day = 15
    }else{

      if(this.selectedMonth == 1){
        this.day = 28
      }else{
        this.day = 30
      }

    }



    this.http.post(this.urlService.getUrl()+'/api/recibo', {year: this.selectedYear, month: this.selectedMonth, day: this.day, cedula: this.storage.getItem('cedula')}).subscribe((response: any) => {
      //this.presentAlert(response[0].sueper)

      //console.log(response)

      if(response.desglose.length <= 0){

        this.presentAlert("No existen registros para esta nomina", 'Error');

      }else{

        this.dataService.setData(42, response);
        this.router.navigateByUrl('/mostrar-recibo/42');

      }

    });

  }


  goBack(){
    this.router.navigateByUrl('/dashboard');
  }



}
