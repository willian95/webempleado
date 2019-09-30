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
  asignaciones:any
  deducciones:any
  totalAsignaciones:any
  totalDeducciones:any

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
    this.asignaciones = 0;
    this.deducciones = 0;
    this.totalAsignaciones = 0;


    this.desglose.forEach((value) => {
      this.sueldoNeto = parseFloat(this.sueldoNeto) + parseFloat(value.valsal)
    })

    this.desglose.forEach((value) => {
      if(value.tipsal == 'A '){
        this.asignaciones = parseFloat(this.asignaciones) + parseFloat(value.valsal)
        this.totalAsignaciones = this.number_format(this.asignaciones, 2, ',', '.')
      }
    })

    this.desglose.forEach((value) => {
      if(value.tipsal == 'P1'){
        this.deducciones = parseFloat(this.deducciones) + parseFloat(value.valsal)
        this.totalDeducciones = this.number_format(this.deducciones * -1, 2, ',', '.')
      }
    })

    var num = this.sueldoNeto.toFixed(2)
    this.sueldoNeto = this.number_format(this.sueldoNeto, 2, ',', '.')
    //var cents = (num - Math.floor(num)).toFixed(2);
    //this.sueldoNeto = Math.floor(num).toLocaleString() + ',' + cents.split('.')[1];

  }

  number_format(number, decimals, dec_point, thousands_point) {

    if (number == null || !isFinite(number)) {
        throw new TypeError("number is not valid");
    }

    if (!decimals) {
        var len = number.toString().split('.').length;
        decimals = len > 1 ? len : 0;
    }

    if (!dec_point) {
        dec_point = '.';
    }

    if (!thousands_point) {
        thousands_point = ',';
    }

    number = parseFloat(number).toFixed(decimals);

    number = number.replace(".", dec_point);

    var splitNum = number.split(dec_point);
    splitNum[0] = splitNum[0].replace(/\B(?=(\d{3})+(?!\d))/g, thousands_point);
    number = splitNum.join(dec_point);

    return number;
}

}
