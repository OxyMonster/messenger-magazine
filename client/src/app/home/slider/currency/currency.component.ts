import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent implements OnInit {



  USD: any = 0; 
  GBP: any = 0; 
  RUB: any = 0;
  EURO: any = 0; 

  math = Math; 


  constructor(
    private globalSerice: GlobalService
  ) { }

  ngOnInit() {
    this.getCurrencyRate(); 
  }

  getCurrencyRate() {
    return this.globalSerice
               .getCurrency()
               .subscribe(data => {
  
                 this.USD = data['usd']['inverseRate'].toString().split('.')[0] + ',' + data['usd']['inverseRate'].toString().split('.')[1].toString().split('')[0]; 
                 this.GBP = data['gbp']['inverseRate'].toString().split('.')[0] + ',' + data['usd']['inverseRate'].toString().split('.')[1].toString().split('')[0]; 
                 this.EURO = data['eur']['inverseRate'].toString().split('.')[0] + ',' + data['usd']['inverseRate'].toString().split('.')[1].toString().split('')[0]; 
                 this.RUB = data['rub']['inverseRate'].toString().split('.')[0] + ',' + data['usd']['inverseRate'].toString().split('.')[1].toString().split('')[0]; 
                 
               }, err => console.log(err)); 
  }


}
