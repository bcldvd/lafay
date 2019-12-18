import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DriveService {
  api = `${environment.AUTH_SERVER}/drive`;

  constructor(private http: HttpClient) {}

  getAppData(): Observable<ConfigFile> {
    return this.http.get<ConfigFile>(`${this.api}/appdata`);
  }

  postAppData(location: string): Observable<ConfigFile> {
    return this.http.post<ConfigFile>(`${this.api}/appdata`, { location });
  }

  deleteAppData() {
    return this.http.delete(`${this.api}/appdata`);
  }

  getSheet(id: string, range = 'A1:C20') {
    return this.http.get(`${this.api}/sheet/${id}?range=${range}`);
  }
}

export interface ConfigFile {
  pathOfDb: string;
  title: string;
  id: string;
}
