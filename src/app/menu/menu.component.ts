import { Component, OnInit } from '@angular/core';
import { DriveService } from '../home/drive.service';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  constructor(
    private driveService: DriveService,
    private authService: AuthService
  ) {}

  ngOnInit() {}

  async logout() {
    await this.authService.logout();
    location.reload();
  }

  deleteConfig() {
    this.driveService.deleteAppData().subscribe(
      data => console.log(data),
      err => console.error(err)
    );
  }
}
