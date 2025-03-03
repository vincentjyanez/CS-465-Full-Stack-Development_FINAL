import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trip } from '../models/trip';

@Injectable({
  providedIn: 'root',
})

export class TripDataService {

  private apiUrl = 'http://localhost:3000/api/trips'; 

  constructor(private http: HttpClient) {}

  // Fetch trips
  public getTrips(): Observable<Trip[]> {
    return this.http.get<Trip[]>(this.apiUrl);
  }

  // Add a new trip
  public addTrip(trip: Trip): Observable<Trip> {  
    return this.http.post<Trip>(this.apiUrl, trip);
  }
}

