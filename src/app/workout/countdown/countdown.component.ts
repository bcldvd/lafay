import {
  Component,
  OnInit,
  ViewChild,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import {
  CountdownConfig,
  CountdownComponent,
  CountdownStatus
} from 'ngx-countdown';

@Component({
  selector: 'workout-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class WorkoutCountdownComponent implements OnInit {
  @ViewChild('cd', { static: false }) private countdown: CountdownComponent;

  @Input() time: number;

  @Output() done = new EventEmitter<boolean>();

  countdownConfig: CountdownConfig;

  constructor() {}

  ngOnInit() {
    const format = this.formatFromTime(this.time);
    this.countdownConfig = {
      leftTime: this.time,
      format
    };
  }

  formatFromTime(time: number): string {
    return time > 59 ? 'm:ss' : 's';
  }

  handleEvent(event) {
    if (event.status === CountdownStatus.done) {
      this.done.emit(true);
    }
  }
}
