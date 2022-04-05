import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  sideBarOpen = true;
  sideBarIndex = 0;

  constructor(
  ) {
    
  }

  ngOnInit() {
    
  }

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  switchSideBarContent($event) {
    this.sideBarIndex = $event;
  }

}
