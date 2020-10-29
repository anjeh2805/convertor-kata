import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ConversionHistoricComponent } from './components/conversion-historic/conversion-historic.component';
import { AgGridModule } from 'ag-grid-angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ConversionHistoricComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexModule,
    FormsModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    AgGridModule.withComponents([]),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
