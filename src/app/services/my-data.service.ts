import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyDataService {
  private apiUrl = 'https://rickandmortyapi.com/api/character';
  constructor(private http: HttpClient) { }
//Get Method that gets all the characters from the API
  getData(): Observable<any> {
    return this.http.get(`${this.apiUrl}/?page=1`);
  }
//Get Method that gets the details from a specific ID
  getCharacter(id: number): Observable<any> {
    const url = `${this.apiUrl}/`+id;
    return this.http.get(url);
  }
}
