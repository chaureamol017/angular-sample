import { Injectable } from '@angular/core';
// import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(
    // private toastrService: ToastrService
    ) {
    
  }

  success() {
    // this.toastrService.success('Hello world!', 'Toastr fun!');
  }
}
