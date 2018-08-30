import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import {TimerService} from './timer.service';
import {TaskComponent} from './task/task.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksListComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [TimerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
