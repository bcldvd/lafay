import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { DriveService } from './drive.service';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  config$ = new Subject();

  constructor(private driveService: DriveService) {}

  ngOnInit() {
    this.getAppConfig().subscribe(data => {
      this.driveService.getSheet((data as any).id).subscribe(config => {
        console.log(config);
        this.config$.next((config as any).data.sheets[0].data[0].rowData);
      });
    });
  }

  getAppConfig() {
    const config$ = new Subject();
    this.driveService.getAppData().subscribe(
      data => config$.next(data),
      err => {
        if (err.status === 404) {
          const location = './lafay-db';
          console.log(
            `Creating a config file with sheet location at ${location}`
          );
          this.driveService
            .postAppData(location)
            .pipe(mergeMap(() => this.driveService.getAppData()))
            .subscribe(data => {
              config$.next(data);
            });
        }
      }
    );
    return config$;
  }

  deleteConfig() {
    this.driveService.deleteAppData().subscribe(
      data => console.log(data),
      err => console.error(err)
    );
  }
}
