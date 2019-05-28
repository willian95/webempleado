import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor() { }

  getUrl(){

  	return "http://beta-webempleadov2.vtelca.gob.ve"
  	//return "http://localhost:8000";

  }

}
