import { Component, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem, CdkDropList, DragDropModule} from '@angular/cdk/drag-drop';
import {CommonModule} from "@angular/common";



@Component({
  selector: 'app-calendar-event',
  standalone: true,
  imports: [CommonModule, DragDropModule],
  templateUrl: './calendar-event.component.html',
  styleUrl: './calendar-event.component.scss'
})
  export class CalendarEventComponent implements AfterViewInit {

  constructor() {
    this.dropLists = {} as QueryList<CdkDropList>; // This is generally not recommended for @ViewChildren
    this.events = this.generateDays(2022, 2);
  }

  events = [
    { id: 1, day: '1', date: '2022-02-01', events: [{ id: 101, name: 'Dark Chocolate Day' }, { id: 102, name: 'Something Else Day' }] },
    { id: 2, day: '2', date: '2022-02-02', events: [{ id: 201, name: 'Groundhog Day' }] },
    // More days...
  ];

   predefinedEvents: { day: number, events: Event[] }[] = [
    { day: 1, events: [{ id: 101, name: 'Dark Chocolate Day' }, { id: 102, name: 'Something Else Day' }] },
    { day: 2, events: [{ id: 201, name: 'Groundhog Day' }] },
    // Add additional days with their respective events here...
  ];

  @ViewChildren(CdkDropList) dropLists: QueryList<CdkDropList>;

  listIds: string[] = [];

  ngAfterViewInit() {
    this.listIds = this.dropLists.toArray().map(list => list.id);
  }

  trackByDay(index: number, item: any): number {
    return item.id;
  }

  trackByEvent(index: number, item: any): number {
    return item.id;
  }

  dropEvent(event: CdkDragDrop<any[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data,
        event.previousIndex, event.currentIndex);
    }
  }

  dropSpan(event: CdkDragDrop<any[]>, day: any): void {
    this.dropEvent(event);
  }

  generateDays(year: number, month: number): DayEvents[] {
    const daysInMonth = new Date(year, month, 0).getDate();
    const monthEvents: DayEvents[] = [];

    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month - 1, day);
      const formattedDate = date.toISOString().substring(0, 10);
      const dayEvents = this.predefinedEvents.find(e => e.day === day)?.events || [];
      monthEvents.push({
        id: day,
        day: day.toString(),
        date: formattedDate,
        events: dayEvents
      });
    }

    return monthEvents;
  }
}

interface Event {
  id: number;
  name: string;
}

interface DayEvents {
  id: number;
  day: string;
  date: string;
  events: Event[];
}
