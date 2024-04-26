import { Component } from '@angular/core';
import {CdkDragDrop, DragDropModule, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {CommonModule} from "@angular/common";


@Component({
  selector: 'app-calendar-event',
  standalone: true,
  imports: [CommonModule, DragDropModule],
  templateUrl: './calendar-event.component.html',
  styleUrl: './calendar-event.component.scss'
})
export class CalendarEventComponent {
  events = [
    { id: 1, day: '1', date: '2022-02-01', events: [{ id: 101, name: 'Dark Chocolate Day' }, { id: 102, name: 'Something Else Day' }] },
    { id: 2, day: '2', date: '2022-02-02', events: [{ id: 201, name: 'Groundhog Day' }] },
  ];

  constructor() {
    this.generateMonthlyEvents(2024, 4);
  }

  trackByDay(index: number, item: any): number {
    return item.id;
  }

  trackByEvent(index: number, item: any): number {
    return item.id;
  }

  dropEvent(event: CdkDragDrop<any[]>): void {
    console.log('Dropped from:', event.previousContainer.id, 'to:', event.container.id);
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  get connectedDropListsIds(): string[] {
    return this.events.map(day => 'drop-list-' + day.id);
  }

  generateMonthlyEvents(year: number, month: number) {
    const daysInMonth = new Date(year, month, 0).getDate();
    for (let day = 1; day <= daysInMonth; day++) {
      this.events.push({
        id: day,
        day: day.toString(),
        date: `${month}-${('0' + day).slice(-2)}`,  // Ensures the date is in YYYY-MM-DD format
        events: []  // Start with an empty array of events
      });
    }
}
}

