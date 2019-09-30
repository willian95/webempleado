import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
	
  name:""
  cedula:""
  storage:any

  constructor(private router: Router) { 
    this.storage = localStorage;
  }

  ngOnInit() {
    if(localStorage.getItem('name')){
      this.name = this.storage.getItem('name')
    }

    if(localStorage.getItem('cedula')){
      this.cedula = this.storage.getItem('cedula')
    }
  	
  }

  goToRecibosPago(){
    this.router.navigateByUrl('/recibos-pago');
  }

  goToConstancia(){
    this.router.navigateByUrl('/constancia');
  }

  logout(){

  	this.storage.setItem('name', '');
    this.storage.setItem('cedula', '');
    this.storage.setItem('ingreso', '');
    this.storage.setItem('id', '');

  	this.router.navigateByUrl('/');

  }

}
