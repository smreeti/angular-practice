import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CoursesComponent} from './courses.component';
import { RecordsService } from './records.service';
import {FormsModule} from '@angular/forms';
import {ServerComponent} from './server/server.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    ServerComponent,
    TestComponent
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

