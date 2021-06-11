import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxEchartsModule } from 'ngx-echarts';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import * as echarts from 'echarts/core';
import { LineChart } from 'echarts/charts';
import {
  TitleComponent,
  TooltipComponent,
  GridComponent
} from 'echarts/components';
import {
  CanvasRenderer
} from 'echarts/renderers';
import 'echarts/theme/macarons.js';
import { HomeComponent } from './components/home/home.component';
import { Graphic1Component } from './components/graphic1/graphic1.component';
import { Graphic2Component } from './components/graphic2/graphic2.component';
import { HeaderComponent } from './components/layout/header/header.component';

echarts.use(
  [TitleComponent, TooltipComponent, GridComponent, LineChart, CanvasRenderer]
);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Graphic1Component,
    Graphic2Component,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxEchartsModule.forRoot({ echarts})    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
