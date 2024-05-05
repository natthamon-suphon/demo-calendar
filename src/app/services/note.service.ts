import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Note } from '../interfaces/note';
import { handleError } from '../utils/observaable.util';
import { API_ENPOINT } from '../constants/api.constant';
import { NoteLabel } from '../interfaces/note-label';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private http: HttpClient) { }

  getNotes(): Observable<Note[]> {
    // return this.http.get<Note[]>(API_ENPOINT.NOTE)
    //   .pipe(
    //     catchError(handleError)
    //   );

    return of([{"id":-1,"title":"Quick try on DB","startDate":1714654841,"endDate":1714802441,"labels":[1],"summary":"One morning"},{"id":0,"title":"Quick try on DB","startDate":1714654841,"endDate":1714802441,"labels":[1,3],"summary":"One morning, when Gregor Samsa woke from troubled dreams."},{"id":1,"title":"Quick try on DB","startDate":1641164400,"endDate":1641164400,"labels":[1,3],"summary":"One morning, when Gregor Samsa woke from troubled dreams."},{"id":2,"title":"Dirty check","startDate":1641250800,"endDate":1641250800,"labels":[2],"summary":"MTV"},{"id":3,"title":"Fix a the bug","startDate":1641250800,"endDate":1641337200,"labels":[2],"summary":"DJs flock by when MTV ax quiz"},{"id":4,"title":"Improve backend","startDate":1641337200,"endDate":1641337200,"labels":[1,2],"summary":"totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vit"},{"id":5,"title":"Add chat feature","startDate":1641337200,"endDate":1641423600,"labels":[3],"summary":"One morning,"},{"id":6,"title":"Improve submodule","startDate":1641337200,"endDate":1641337200,"labels":[3],"summary":"he quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog"},{"id":7,"title":"Extend calendar","startDate":1641510000,"endDate":1641510000,"labels":[1,2],"summary":"A collection of textile samples"},{"id":8,"title":"Friends check","startDate":1641510000,"endDate":1641510000,"labels":[1,3],"summary":"Gregor then turned to look out the window at the dull weather. Drops of rain could be heard hitting the pane, which made him feel quite sad."},{"id":9,"title":"Write some code","startDate":1641769200,"endDate":1641942000,"labels":[1],"summary":"Far far away, behind the word mountains,"},{"id":10,"title":"YAML really?","startDate":1641855600,"endDate":1641855600,"labels":[1,3],"summary":"Separated they live in Bookmarksgrove right at the coast o"},{"id":11,"title":"Get together","startDate":1641942000,"endDate":1641942000,"labels":[2],"summary":"he quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog"},{"id":12,"title":"Extend mid module","startDate":1641942000,"endDate":1641942000,"labels":[2,3],"summary":"Separated they live in Bookmarksgrove"},{"id":13,"title":"Optimize start","startDate":1641942000,"endDate":1641942000,"labels":[2,3],"summary":"Gregor then turned to look out the window at the dull weather. Drops of rain could be heard hitting the pane, which made him feel quite sad."},{"id":14,"title":"Optimize end","startDate":1642028400,"endDate":1642374000,"labels":[2],"summary":"His room, a proper human room although a little too small, lay peacefully between its four familiar walls"},{"id":15,"title":"Buy a cake","startDate":1642114800,"endDate":1642114800,"labels":[2,3],"summary":"Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar."},{"id":101,"title":"Options","startDate":1642114800,"endDate":1642114800,"labels":[1],"summary":"The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps."},{"id":17,"title":"Blind Geme","startDate":1642460400,"endDate":1642460400,"labels":[2],"summary":"One morning,"},{"id":18,"title":"Extend Entry module","startDate":1642460400,"endDate":1642460400,"labels":[2],"summary":"DJs flock by when MTV ax quiz"},{"id":19,"title":"Order drinks","startDate":1642460400,"endDate":1642633200,"labels":[3],"summary":"The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy."},{"id":20,"title":"Celebrate something","startDate":1642633200,"endDate":1642633200,"labels":[1,2,3],"summary":"The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps."},{"id":21,"title":"End up","startDate":1642719600,"endDate":1642719600,"labels":[2],"summary":"A collection of textile samples"}])
  }

  getNoteLabels(): Observable<NoteLabel[]> {
    // return this.http.get<NoteLabel[]>(API_ENPOINT.NOTE_LABEL)
    //   .pipe(
    //     catchError(handleError)
    //   );
    return of([{"id":1,"text":"Important"},{"id":2,"text":"New"},{"id":3,"text":"Private"}]);
  }

  updateNotes(note:Note): Observable<Note> {
    return this.http.put<Note>(`${API_ENPOINT.UPDATE_NOTE}/${note.id}`, note)
      .pipe(
        catchError(handleError)
      );
  }
}

  
