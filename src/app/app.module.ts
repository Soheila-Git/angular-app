import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyDashComponent } from './my-dash/my-dash.component';
import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule } from '@angular/material';
import { MyShareLibModule } from 'projects/my-share-lib/src/public_api';

@NgModule({
  declarations: [
    AppComponent,
    MyDashComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MyShareLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
