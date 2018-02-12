import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CalendarComponent } from './widgets/calendar/calendar.component';
import { TodoComponent } from './widgets/todo/todo.component';
import { PbiListComponent } from './widgets/pbi-list/pbi-list.component';
import { PbiCardComponent } from './widgets/pbi-card/pbi-card.component';
import { PbiTaskComponent } from './widgets/pbi-task/pbi-task.component';

import { TfsService } from './services/tfs.service';
import { SprintService } from './services/sprint.service';

import { SprintComponent } from './sprint/sprint.component';
import { PbiColumnComponent } from './widgets/pbi-column/pbi-column.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CalendarComponent,
    TodoComponent,
    PbiListComponent,
    SprintComponent,
    PbiCardComponent,
    PbiColumnComponent,
    PbiTaskComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    TfsService,
    SprintService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
