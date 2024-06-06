import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CoreCommonModule } from '@core/common.module';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from '../profile/profile.component';

// routing
const routes: Routes = [
  {
    path: 'accueil',
    component: HomeComponent,
    data: { animation: 'acc' }
  },
  {
    path: 'profile',
    component: ProfileComponent,
    data: { animation: 'acc' }
  },
];

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, RouterModule.forChild(routes), CoreCommonModule]
})
export class GeneralModule { }
