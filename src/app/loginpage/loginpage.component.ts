import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent implements OnInit {

  @Output() signin = new EventEmitter<boolean>();
  loggedIn = false;

  constructor() { }

  ngOnInit(): void {
  }


  signIn(bool: boolean) {
    this.loggedIn = true;
    this.signin.emit(bool);
  }
}
