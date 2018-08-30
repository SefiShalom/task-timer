import {Component, Input, OnInit} from '@angular/core';
import {Timer} from '../timer';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {TimerService} from '../timer.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() taskName: string;
  taskTimer: Timer;
  timerDisplay: string;
  taskButtonTitle: string;
  run: boolean;
  isRunning = new BehaviorSubject<number>(-1);

  constructor(private timerService: TimerService) {
    this.taskButtonTitle = 'Play';
    this.taskTimer = new Timer();
    this.timerDisplay = '00:00:00';
    this.run = false;
    this.timerService.subscribeTimer(this);
    this.timerService.isRunning.subscribe(run => {
      if(this.run && run){
        this.timerDisplay = this.taskTimer.increaseTimer();
      }
    })
  }

  onPlayButtonClick() {
    this.run = !this.run;
    this.isRunning.next(this.run ? 1 : 0);
    console.log('from task ' + this.taskName + ' run is ' + this.run);
    this.taskButtonTitle = this.run ? 'Pause' : 'Play';
  }

  ngOnInit() {
  }
}


