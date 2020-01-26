import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { CountdownModule } from 'ngx-countdown';

import { WorkoutPageRoutingModule } from './workout-routing.module';

import { WorkoutPage } from './workout.page';
import { WorkoutCountdownComponent } from './countdown/countdown.component';
import { ExerciseComponent } from './exercise/exercise.component';
import { InputPlusMinusComponent } from './exercise/input-plus-minus/input-plus-minus.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorkoutPageRoutingModule,
    CountdownModule
  ],
  declarations: [
    WorkoutPage,
    WorkoutCountdownComponent,
    ExerciseComponent,
    InputPlusMinusComponent
  ],
  entryComponents: [
    WorkoutCountdownComponent,
    ExerciseComponent,
    InputPlusMinusComponent
  ]
})
export class WorkoutPageModule {}
