import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Output() indexChange: EventEmitter<any> = new EventEmitter();

  activeLink: any = 0; 
  loggedInUserName: any;
  loggedInUserEmail: any;

  constructor() {
  }
  // constructor(private adminService: AdminService) {
  //   adminService.onValidateCall
  // }

  ngOnInit() {
    this.activeLink = 0; 
    // this.loggedInUserName = this.adminService.getFirstName() + " " + this.adminService.getLastName();
    // this.loggedInUserEmail = this.adminService.getEmailId();
  }
  
  switchSideBar(clickedLink) {
    this.activeLink = clickedLink;

    this.indexChange.emit(this.activeLink);
  }
}
