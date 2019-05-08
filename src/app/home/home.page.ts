import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
	
	cedula:""
	password:""

	constructor(private router: Router, private http: HttpClient, public alertController: AlertController){

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

		this.http.post('http://beta-webempleadov2.vtelca.gob.ve/api/login', {cedula: this.cedula, clave: this.password}).subscribe((response: any) => {
			
			if(response.error == true){

				this.presentAlert(response.message, 'Error')
				this.password = ""

			}else{
				localStorage.setItem('name', response.data.nombre_usuario)
				this.cedula = ""
				this.password = ""
	        	this.router.navigateByUrl('/dashboard');
			}

			
        	
      	});
	}

}
