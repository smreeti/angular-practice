import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CoursesComponent} from './courses.component';
import { RecordsService } from './records.service';
import {FormsModule} from '@angular/forms';
import {ServerComponent} from './server/server.component';
import {CockpitComponent} from './cockpit/cockpit.component';
import {ServerElementComponent} from './server-element/server-element.component';
import {BasicHighlightDirective} from './basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './better-highlight/better-highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    ServerComponent,
    CockpitComponent,
    ServerElementComponent,
    BasicHighlightDirective,
    BetterHighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [RecordsService],
  bootstrap: [AppComponent]
})

export class AppModule { }

