import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() toggleMenu: EventEmitter<any> = new EventEmitter();

  appName: any = "Sample Angular";

  constructor(
    // private dialogService: DialogService,
    // private adminService: AdminService,
    ) { }

  ngOnInit() { }

  onToggleMenu() {
    this.toggleMenu.emit();
  }

  openMyProfile() {
    // var selectedData = {};
    // this.dialogService.openDialogAtRight(ProfileComponent, selectedData, true);
  }
  changePassword () {
    // var selectedData = {};
    // this.dialogService.openDialog(ChangePasswordComponent, selectedData, false);
  }
  logOut () {
    // this.adminService.logOut();
  }
}
