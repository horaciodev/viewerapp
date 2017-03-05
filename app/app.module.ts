import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductModule } from './products/product.module';
import { ErrorViewerModule } from './errors/errorViewer.module';
import { AppRoutingModule } from './app-routing.module';

import {APP_BASE_HREF} from '@angular/common';

@NgModule({
  imports: [ BrowserModule,
             HttpModule,
             ErrorViewerModule ,
             AppRoutingModule],
  declarations: [ AppComponent,
                  WelcomeComponent
                ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
