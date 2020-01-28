import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Workout } from '../store/models/workouts.model';
import { ConfigFile } from '../store/models/app-data.model';

const headers = {
  'ngsw-bypass': ''
};

const defaultOptions = { headers, withCredentials: true };

@Injectable({
  providedIn: 'root'
})
export class DriveService {
  api = `${environment.AUTH_SERVER}/drive`;
  defaultLocation = './lafay-db';

  constructor(private http: HttpClient) {}

  getAppData(): Observable<ConfigFile> {
    return this.http.get<ConfigFile>(`${this.api}/appdata`, defaultOptions);
  }

  postAppData(location: string): Observable<ConfigFile> {
    return this.http.post<ConfigFile>(
      `${this.api}/appdata`,
      { location },
      defaultOptions
    );
  }

  deleteAppData() {
    return this.http.delete(`${this.api}/appdata`, defaultOptions);
  }

  getSheet(id: string, range = 'A1:Z1000'): Observable<Workout[]> {
    return this.http
      .get<Workout[]>(`${this.api}/sheet/${id}?range=${range}`, defaultOptions)
      .pipe(
        map(workouts => {
          workouts.forEach(workout => {
            workout.rowsData.forEach(session => {
              session.Date = this.frenchDateToDate(session.Date.toString());
            });
            return workout.rowsData.reverse();
          });
          return workouts.reverse();
        })
      );
  }

  private frenchDateToDate(dateString: string): Date {
    const dateParts = dateString.split('/');

    // month is 0-based, that's why we need dataParts[1] - 1
    return new Date(+dateParts[2], +dateParts[1] - 1, +dateParts[0]);
  }
}
