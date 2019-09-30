import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { AlertController } from '@ionic/angular';
import { UrlService } from '../services/url.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
	
	cedula:""
	password:""
	storage:any

	constructor(private router: Router, private http: HttpClient, public alertController: AlertController, private urlService: UrlService){
		this.storage = localStorage
	}

	async presentAlert(errorMessage, type) {
	    const alert = await this.alertController.create({
	      header: type,
	      message: errorMessage,
	      buttons: ['OK']
	    });

	    await alert.present();
  	}

	login(){
		
		//this.storage.setItem('name', '');
	    //this.storage.setItem('cedula', '');
	    //this.storage.setItem('id', '');	
	    this.storage.clear()

		this.http.post(this.urlService.getUrl()+'/api/login', {cedula: this.cedula, clave: this.password}).subscribe((response: any) => {

			console.log(response)

			if(response.error == true){

				this.presentAlert(response.message, 'Error')
				this.password = ""

			}else{
				//console.log(response.data)
				localStorage.setItem('name', response.nombre_usuario)
				localStorage.setItem('cedula', this.cedula)
				localStorage.setItem('ingreso', response.annio_ingreso)
				this.cedula = ""
				this.password = ""
				
				if(response.redirect == true)
					this.router.navigateByUrl('/dashboard');
			}
        	
      	});
	}

}
