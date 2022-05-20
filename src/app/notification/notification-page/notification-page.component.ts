import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../service/notification.service';

@Component({
  selector: 'app-notification-page',
  templateUrl: './notification-page.component.html',
  styleUrls: ['./notification-page.component.scss']
})
export class NotificationPageComponent implements OnInit {
// Raised row
  buttons: string[] = ['Error Toast', 'Success Toast']
  tableIndex: number = -1;

  constructor(private notificationService: NotificationService ) { }

  ngOnInit(): void {
  }

  onButtonClick(index: number) {
    this.tableIndex = index;

    if (index === 1) {
      this.notificationService.success();
    }
  }

}
