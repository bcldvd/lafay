import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { AuthGuardService } from '../auth/auth-guard.service';
import { WorkoutsHistoryComponent } from './workouts-history/workouts-history.component';
import { TimeAgoPipe } from 'time-ago-pipe';
import { WorkoutsHistorySkeletonComponent } from './workouts-history-skeleton/workouts-history-skeleton.component';
import { NbToArrayPipe } from '../pipes/nb-to-array.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
        //canActivate: [AuthGuardService]
      }
    ])
  ],
  declarations: [
    HomePage,
    WorkoutsHistoryComponent,
    TimeAgoPipe,
    WorkoutsHistorySkeletonComponent,
    NbToArrayPipe
  ]
})
export class HomePageModule {}
