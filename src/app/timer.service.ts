import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {TaskComponent} from './task/task.component';

@Injectable()
export class TimerService {

  tasksList: TaskComponent[];
  isRunning = new BehaviorSubject<boolean>(false);
  hasRunningTasks = new BehaviorSubject<boolean>(false)
  runningTasks: number;

   constructor() {
    this.tasksList = [];
    this.runningTasks = 0;
     this.runTimer();
  }


  subscribeTimer(task: TaskComponent){

    this.tasksList.push(task);

     task.isRunning.subscribe(running => {
       switch(running) {
         case(0): {
           if(this.runningTasks === 0){
             this.hasRunningTasks.next(false);
           }
           return;
         }
         case(1):{
              for(let i = 0; i < this.tasksList.length; i++){
                if(this.tasksList[i] != task && this.tasksList[i].run){
                  this.tasksList[i].onPlayButtonClick();
                  break;
                }
              }
           this.hasRunningTasks.next(true);
           return;
         }
       }
     });
  }

  runTimer () {
    setInterval(() => {
      this.isRunning.next(true);
      console.log('timer is running');
    }, 1000);
  }

}
