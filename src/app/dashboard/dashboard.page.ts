import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
	
	name:""
  storage:any

  constructor(private router: Router) { 
    this.storage = localStorage;
  }

  ngOnInit() {
    if(localStorage.getItem('name')){
      this.name = this.storage.getItem('name')
    }
  	
  }

  goToRecibosPago(){
    this.router.navigateByUrl('/recibos-pago');
  }

  logout(){

  	this.storage.setItem('name', '');
  	this.router.navigateByUrl('/');

  }

}
