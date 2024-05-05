import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {NoteService} from "../../services/note.service";

@Component({
  selector: 'app-weekly-calendar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weekly-calendar.component.html',
  styleUrl: './weekly-calendar.component.scss'
})
export class WeeklyCalendarComponent implements OnInit {

  constructor(private noteService: NoteService) {}

  ngOnInit(): void {
    this.getNote()
    this.getNoteLabel();

  }

  private getNote() {
    this.noteService.getNotes().subscribe({
      next: (data) => {
        console.log(data);

      },
      error: (error) => {
        console.error('Error fetching note', error);
      },
      complete: () => console.log('Note fetching completed')
    });
  }

  private getNoteLabel() {
    this.noteService.getNoteLabels().subscribe({
      next: (data) => {
        console.log(data);

      },
      error: (error) => {
        console.error('Error fetching note', error);
      },
      complete: () => console.log('Note fetching completed')
    });
  }
}
