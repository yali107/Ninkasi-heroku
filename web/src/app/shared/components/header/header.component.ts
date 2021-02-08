import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // @HostListener('window:scroll', ['$event'])
  // onWindowScroll(e) {
  //   let element = document.querySelector('.navbar');
  //   // if (window.pageYOffset > element.clientHeight) {
  //   //   element.classList.add('transparent');
  //   //   element.classList.remove('bg-black');
  //   // } else {
  //   //   element.classList.remove('transparent');
  //   //   element.classList.add('bg-black');
  //   // }
  // }

  public isCollapsed = true;

  constructor() { }

  ngOnInit() {
  }



}
