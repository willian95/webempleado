import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mostrar-recibo',
  templateUrl: './mostrar-recibo.page.html',
  styleUrls: ['./mostrar-recibo.page.scss'],
})
export class MostrarReciboPage implements OnInit {
	
	response: any
  data: any;
  desglose:any
  sueldoNeto:any

  sliderConfig = {


  }

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

  	if(this.route.snapshot.data['special']){

  		this.response = this.route.snapshot.data['special'];

  	}

    this.data = this.response.datos
    this.desglose = this.response.desglose
    this.sueldoNeto = 0

    this.desglose.forEach((value) => {
      this.sueldoNeto = parseFloat(this.sueldoNeto) + parseFloat(value.valsal)
      //console.log(this.sueldoNeto +" "+ value.valsal)
      //console.log(parseFloat(value.valsal) + parseFloat(this.sueldoNeto))
    })

    console.log(this.response)
    console.log(this.desglose)
    console.log(this.response.datos)
    console.log(this.sueldoNeto.toFixed(2))

  }

}
