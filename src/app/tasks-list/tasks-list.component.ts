import { Component, OnInit } from '@angular/core';
import {TimerService} from '../timer.service';
import {Timer} from '../timer';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {

  runningTasks: number;
  timerDisplay: string;
  tasksNames: string[];
  newTaskName: string;
  timer: Timer;
  run: boolean;

  constructor(private timerService: TimerService) {
    this.tasksNames = [];
    this.runningTasks = 0;
    this.run = false;
    this.timerDisplay = '00:00:00'
    this.timer = new Timer();
    this.timerService.isRunning.subscribe(run => {
      if(this.run && run){
        this.timerDisplay = this.timer.increaseTimer();
      }
    })
    this.timerService.hasRunningTasks.subscribe(ans => {
        this.run = ans;
    });
  }

  ngOnInit() {

  }

  addNewTask(taskName: string) {
    if(this.newTaskName) this.tasksNames.push(taskName);
      this.newTaskName = '';
  }
}
