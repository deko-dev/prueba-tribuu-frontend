import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { IconsProviderModule } from 'src/app/icons-provider.module';
import { ModalUserComponent } from './modal-user/modal-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const dashboardRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent
  }
];

@NgModule({
  declarations: [
    DashboardComponent,
    ModalUserComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(dashboardRoutes),
    IconsProviderModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class DashboardModule { }
