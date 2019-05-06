import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recibos-pago',
  templateUrl: './recibos-pago.page.html',
  styleUrls: ['./recibos-pago.page.scss'],
})
export class RecibosPagoPage implements OnInit {
	
	name: ""

  constructor(private router: Router) { }

  ngOnInit() {
  	this.name = localStorage.getItem('name')
  }


  goBack(){
    this.router.navigateByUrl('/dashboard');
  }



}
