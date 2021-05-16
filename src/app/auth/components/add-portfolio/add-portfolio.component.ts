import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { HttpClient } from '@angular/common/http';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-add-portfolio',
  templateUrl: './add-portfolio.component.html',
  styleUrls: ['./add-portfolio.component.css'],
})
export class AddPortfolioComponent implements OnInit {
  ngOnInit() {}

  addForm = new FormGroup({
    user_id: new FormControl(''),
    currency_id: new FormControl(''),
    spot_price: new FormControl(''),
    buy_sell: new FormControl(''),
    date: new FormControl(''),
    quantity: new FormControl(''),
  });
  uid;
  cryptoList: any;
  constructor(private authService: AuthService, private http: HttpClient) {
    this.uid = authService.getUid();
    this.callApi();
  }

  submitPortfolio() {
    //console.warn(this.addForm.value);
    console.log(this.addForm.value);
    this.authService.addPortfolio(this.addForm.value).subscribe(
      (next) => {
        console.log('Portfolio added ');
      },
      (error) => {
        console.log('Error: ' + error);
      }
    );
  }

  callApi() {
    //console.warn(this.addForm.value);
    const cryptoUrl =
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=50&page=1&sparkline=false';
    this.http.get(cryptoUrl, {}).subscribe(
      (response: any) => {
        //console.log(response);
        this.cryptoList = response;
        let i: number = 0;
        /*for (let c in response) {
          console.log(response[i]);
          this.submitCurrency(response[i]);
          i++;
        }*/
        //console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  submitCurrency(c: any) {
    //console.warn(this.addForm.value);

    this.authService.addCurrency(c).subscribe(
      (next) => {
        console.log('Added');
      },
      (error) => {
        console.log('Error: ' + error);
      }
    );
  }
}
