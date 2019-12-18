import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicStorageModule } from '@ionic/storage';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';
import { Storage } from '@ionic/storage';
import { AuthService } from './auth/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { AppDataReducer } from './store/app-data/reducer';
import { AppDataEffects } from './store/app-data/effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { WorkoutsReducer } from './store/workouts/reducer';
import { WorkoutsEffects } from './store/workouts/effects';
import { environment } from 'src/environments/environment';
import { ServiceWorkerModule } from '@angular/service-worker';

import { MenuComponent } from './menu/menu.component';

export function jwtOptionsFactory(storage, auth) {
  return {
    tokenGetter: () => {
      return storage.get('ACCESS_TOKEN');
    },
    whitelistedDomains: [environment.AUTH_DOMAIN]
  };
}

@NgModule({
  declarations: [AppComponent, MenuComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    IonicStorageModule.forRoot(),
    HttpClientModule,
    JwtModule.forRoot({
      jwtOptionsProvider: {
        provide: JWT_OPTIONS,
        useFactory: jwtOptionsFactory,
        deps: [Storage]
      }
    }),
    StoreModule.forRoot({ appData: AppDataReducer, workouts: WorkoutsReducer }),
    EffectsModule.forRoot([AppDataEffects, WorkoutsEffects]),
    StoreDevtoolsModule.instrument({
      name: 'Lafay',
      maxAge: 25,
      logOnly: environment.production
    }),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: true
    })
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
