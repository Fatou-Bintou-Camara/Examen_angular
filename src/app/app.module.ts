import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SnapIpdComponent } from './snap-ipd/snap-ipd.component';
import { TimeLineComponentComponent } from './time-line-component/time-line-component.component';
import { TopMenuComponentComponent } from './top-menu-component/top-menu-component.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    SnapIpdComponent,
    TimeLineComponentComponent,
    TopMenuComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
