import { Routes } from '@angular/router';
import {CalendarEventComponent} from "./components/calendar-event/calendar-event.component";

export const routes: Routes = [
  {
    path: "calendar-event",
    component: CalendarEventComponent,
    canActivate: [],
  },
];
