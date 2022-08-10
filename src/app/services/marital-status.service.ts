import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MaritalStatus } from '../models/marital-status';

@Injectable({
  providedIn: 'root'
})
export class MaritalStatusService {
  baseUrl = "http://localhost:8000/api/marital-statuses";

  constructor(private readonly httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<MaritalStatus[]>(`${this.baseUrl}`);
  }
}
