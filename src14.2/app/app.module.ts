import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyAddPipe } from './my-add.pipe';
import { MyMultPipe } from './my-mult.pipe';
import { CustomPipeComponent } from './custom-pipe/custom-pipe.component';
import { CustomPipeQ3Component } from './custom-pipe-q3/custom-pipe-q3.component';
import { MarvellousChkPipe } from './marvellous-chk.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MyAddPipe,
    MyMultPipe,
    CustomPipeComponent,
    CustomPipeQ3Component,
    MarvellousChkPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
