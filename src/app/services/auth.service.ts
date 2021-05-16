import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  siteUrl = 'http://localhost:8000/';
  cryptoUrl = 'https://api.coingecko.com/api/v3/';
  constructor(private http: HttpClient, private router: Router) {}

  //helper = new JwtHelperService();

  login(model: any) {
    //console.warn(this.addForm.value);
    return this.http.post(this.siteUrl + 'login', model).pipe(
      map((response: any) => {
        const user = response;
        if (user.status == true) {
          localStorage.setItem('user_id', user.data._id);
          this.router.navigate(['/']).then(() => {
            window.location.reload();
          });
        } else {
          alert('Invalid crediential');
        }
      })
    );
  }

  loggedIn() {
    const token: any = localStorage.getItem('user_id');
    if (token == '' || token == undefined) {
      return false;
    } else {
      return true;
    }

    //return !this.helper.isTokenExpired(token);
  }
  getUid() {
    return localStorage.getItem('user_id');
  }
  logout() {
    localStorage.removeItem('user_id');
    this.router.navigate(['/']).then(() => {
      window.location.reload();
    });
  }

  signup(model: any) {
    //console.warn(this.addForm.value);
    return this.http.post(this.siteUrl + 'signup', model).pipe(
      map((response: any) => {
        const user = response;
        if (user.status == true) {
          localStorage.setItem('user_id', user.data._id);

          this.router.navigate(['/']).then(() => {
            window.location.reload();
          });
        } else {
          alert(user.message);
        }
      })
    );
  }

  addCurrency(model: any) {
    //console.warn(this.addForm.value);
    return this.http.post(this.siteUrl + 'add-currency', model).pipe(
      map((response: any) => {
        const user = response;
        if (user.status == true) {
          console.log(user.message);
        } else {
          console.log('Already ', user.message);
        }
      })
    );
  }

  addPortfolio(model: any) {
    //console.warn(this.addForm.value);
    return this.http.post(this.siteUrl + 'add', model).pipe(
      map((response: any) => {
        const user = response;
        if (user.status == true) {
          alert(user.message);
          window.location.reload();
        } else {
          alert(user.message);
        }
      })
    );
  }
  editPortfolio(model: any) {
    //console.warn(this.addForm.value);
    return this.http.post(this.siteUrl + 'edit', model).pipe(
      map((response: any) => {
        const user = response;
        if (user.status == true) {
          alert(user.message);
        } else {
          alert(user.message);
        }
      })
    );
  }
  getBaseUrl() {
    return this.siteUrl;
  }
  getPortfolio(model: any) {
    //console.warn(this.addForm.value);
    return this.http.get(this.siteUrl + 'get', model).pipe(
      map((response: any) => {
        const user = response;
        if (user.status == true) {
          alert(user.message);
        } else {
          alert(user.message);
        }
      })
    );
  }
}
