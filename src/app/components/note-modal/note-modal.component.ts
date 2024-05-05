import { Component, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { Note } from '../../interfaces/note';

@Component({
  selector: 'app-note-modal',
  standalone: true,
  imports: [],
  templateUrl: './note-modal.component.html',
  styleUrl: './note-modal.component.scss'
})
export class NoteModalComponent {

  closeModal() {
    
  }
}
