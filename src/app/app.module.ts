import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TargetComponent } from './target/target.component';
import { KpiComponent } from './kpi/kpi.component';
import { ChartComponent } from './chart/chart.component';
import { FileDropDirective } from './file-drop.directive';
import { UploadFormComponent } from './upload-form/upload-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TargetComponent,
    KpiComponent,
    ChartComponent,
    FileDropDirective,
    UploadFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
