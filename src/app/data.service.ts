import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private readonly apiEndpoint = `${environment.apiUrl}/patients`;

  constructor(private readonly http: HttpClient) {}

  getPatients() {
    return this.http.get(this.apiEndpoint);
  }
}
