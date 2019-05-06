import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
	
	name:""

  constructor(private router: Router) { 
    this.localStorage = localStorage;
  }

  ngOnInit() {
    if(localStorage.getItem('name')){
      this.name = localStorage.getItem('name')
    }
  	
  }

  goToRecibosPago(){
    this.router.navigateByUrl('/recibos-pago');
  }

  logout(){

  	localStorage.setItem('name', '');
  	this.router.navigateByUrl('/');

  }

}
