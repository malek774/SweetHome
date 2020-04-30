import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private _http: HttpService) {

  }

  ngOnInit(): void {

  }

  openLoginPage() {
    this._http.loginAuth();
  }

}
