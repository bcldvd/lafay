import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DriveService {
  api = 'http://localhost:3000/drive';

  constructor(private http: HttpClient) {}

  getAppData() {
    return this.http.get(`${this.api}/appdata`);
  }

  postAppData(location: string) {
    return this.http.post(`${this.api}/appdata`, { location });
  }

  deleteAppData() {
    return this.http.delete(`${this.api}/appdata`);
  }

  getSheet(id: string) {
    return this.http.get(`${this.api}/sheet/${id}?range=A1:C20`);
  }
}
