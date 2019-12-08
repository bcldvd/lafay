import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-success',
  templateUrl: './success.page.html',
  styleUrls: ['./success.page.scss'],
})
export class SuccessPage implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getJwt().subscribe(jwt => {
      this.authService.setJwt(jwt);
      this.router.navigate(['/home']);
    });
  }

  getJwt() {
    return this.route.queryParams.pipe(
      filter(params => params.jwt),
      map(params => params.jwt)
    );
  }
}
