import {Injectable} from '@angular/core';
import {ToastrService} from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toastr: ToastrService) {
  }

  showSuccess(msg: string): void {
    this.toastr.success(msg);
  }

  showError(msg: string): void {
    this.toastr.error(msg);
  }

}
