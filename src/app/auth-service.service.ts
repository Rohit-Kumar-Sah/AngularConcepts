import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  loggedin = false;
  constructor() { }
  login() {
    return this.loggedin = true;
  }
  logout() {
    return this.loggedin = false;
  }
  amiready() {

    const fprom = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.loggedin);
      }, 3000)
    })

    return fprom;
  }
}
