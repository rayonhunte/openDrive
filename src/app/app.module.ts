import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';


// import angularFire2
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import { environment } from 'src/environments/environment';

// ngxs
import { NgxsModule} from '@ngxs/store';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsStoragePluginModule} from '@ngxs/storage-plugin';

// ng bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { AppState } from './state/app.state';
import { AuthState } from './state/auth.state';
import { LoginComponent } from './login/login.component';
import { OpenModule } from './open/open.module';
import { RouterModule } from '@angular/router';

// angular forms
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    // init angularFire
    AngularFireModule.initializeApp(environment.fireConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    // ngxs
    NgxsModule.forRoot([AppState, AuthState]),
    NgxsLoggerPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsStoragePluginModule.forRoot(),
    // bootstrap
    NgbModule,
    // routing
    RouterModule.forRoot([]),
    OpenModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
