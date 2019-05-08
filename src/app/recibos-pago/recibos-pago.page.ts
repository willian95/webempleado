import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';
import { File } from '@ionc'


@Component({
  selector: 'app-recibos-pago',
  templateUrl: './recibos-pago.page.html',
  styleUrls: ['./recibos-pago.page.scss'],
})
export class RecibosPagoPage implements OnInit {
	
	name: ""
  storage:any
  public years:Array<string> = new Array(); 
  public monthsList:Array<string>
  public months:Observable<Array<Array<string>>>;
  selectedYear:""
  selectedMonth:""
  selectedPeriod:""
  currentYear:""
  currentMonth:""
  currentMonthNumber:""
  currentDay:""
  
  constructor(private router: Router, public cdr: ChangeDetectorRef){ 
    this.storage = localStorage
  }

  ngOnInit() {

    var d = new Date();

  	this.name = this.storage.getItem('name')
    this.currentYear = new Date().getFullYear();
    this.months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
    this.currentMonth = d.getMonth();
    this.currentDay = d.getDay();

    for(var i = 2014; i <= this.currentYear; i++){
      this.years.push(i)
    }

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


  goBack(){
    this.router.navigateByUrl('/dashboard');
  }



}
