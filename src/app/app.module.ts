import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import {AccordionModule} from 'primeng/accordion'; 
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {TabViewModule} from 'primeng/tabview';
import {CardModule} from 'primeng/card';
import {GalleriaModule} from 'primeng/galleria';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AccordionModule, 
    GalleriaModule,
    TabViewModule,
    CardModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
