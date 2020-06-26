import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Note } from './note';

@Injectable(
//   {
//   providedIn: 'root'
// }
)
export class NoteService {

  constructor(private httpClient : HttpClient) { }

  getNotes(){
    return this.httpClient.get<Array<Note>>('http://localhost:3000/notes')
  }

  addNote(note:Note){
    return this.httpClient.post<Note>('http://localhost:3000/notes',note)
  }

  
}
