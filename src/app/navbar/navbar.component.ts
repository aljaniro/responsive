import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() {


  }

  ngOnInit(): void {

  }
  menus(){
    let menu = document.querySelector('#menu');
    let menu_bar = document.querySelector('#menu-bar');
    menu?.classList.toggle("menu-toggle");


  }
}
