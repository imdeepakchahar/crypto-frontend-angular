import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  uid;
  myList: any;
  singleList: any;
  investment: any;
  ngOnInit(): void {}
  constructor(private authService: AuthService, private http: HttpClient) {
    this.uid = authService.getUid();
    this.callApi(this.uid);
    this.getInvestment(this.uid);
  }

  callApi(uid: any) {
    if (uid == '' || uid == undefined) {
      return;
    }
    //console.warn(this.addForm.value);
    const url = this.authService.getBaseUrl();
    this.http.get(url + 'get?user_id=' + uid, {}).subscribe(
      (response: any) => {
        //console.log(response);
        this.myList = response.data;
        console.log(this.myList);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getSingleDetails(currency_id: any) {
    const url = this.authService.getBaseUrl();
    this.http
      .get(
        url + 'getSingle?user_id=' + this.uid + '&currency_id=' + currency_id,
        {}
      )
      .subscribe(
        (response: any) => {
          //console.log(response);
          this.singleList = response.data;
        },
        (error) => {
          console.log(error);
        }
      );
  }
  getInvestment(currency_id: any) {
    const url = this.authService.getBaseUrl();
    this.http.get(url + 'getInvestment?user_id=' + this.uid, {}).subscribe(
      (response: any) => {
        //console.log(response);
        this.investment = response.investment;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
