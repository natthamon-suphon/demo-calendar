import { Routes } from '@angular/router';
import {WeeklyCalendarComponent} from "./components/weekly-calendar/weekly-calendar.component";

export const routes: Routes = [
  {path: '', redirectTo: 'weekly-calendar-note', pathMatch: 'full' },
  {path: 'weekly-calendar-note', component: WeeklyCalendarComponent },
];
