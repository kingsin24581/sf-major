import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TheaterService {
  private apiUrl = 'https://cpsu-test-api.herokuapp.com/api/camt2023';

  constructor(private http: HttpClient) {}

  getTheaters(): Observable<any> {
    return this.http.get(`${this.apiUrl}/theaters`);
  }
}
