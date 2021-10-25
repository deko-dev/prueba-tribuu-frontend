import { Component, OnInit } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { DataService } from '../../services/data.service';
import { ModalUserComponent } from './modal-user/modal-user.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  users: Array<any> = [];

  constructor(
    private _dataService: DataService,
    private modalService: NzModalService
  ) { }

  async ngOnInit() {
    const response = await this._dataService.getUsers();
    this.users = response;
  }

  /**
   * Method for edit a user
   * 
   * @param user 
   */
  editUser(user: any): void {
    this.modalService.create({
      nzTitle: 'Edit User',
      nzContent: ModalUserComponent,
      nzCancelDisabled: false,
      nzFooter: null,
      nzComponentParams: {
        user: user
      }
    }).afterClose.subscribe(
      async (response) => {
        console.log(response);
        const users = await this._dataService.getUsers();
        this.users = users;
      }
    )
  }
}
