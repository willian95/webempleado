import { Component } from '@angular/core';
import { Router } from '@angular/router';
//import { HTTP } from '@ionic-native/http/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
	
	constructor(private router: Router){

	}

	login(){

		this.router.navigateByUrl('/dashboard');

		/*this.http.get ( url ).subscribe (data => {
			console.log(data)
		});*/
	}

}
