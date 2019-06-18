import { Component } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-full-calendar';
  calendarPlugins = [dayGridPlugin];
  calendarEvents = [
    { title: 'event 1', date: '2019-04-01' }
  ];
}
