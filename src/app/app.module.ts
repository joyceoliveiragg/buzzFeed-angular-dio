import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QzComponent } from './components/qz/qz.component';
import { HmComponent } from './pages/hm/hm.component';

@NgModule({
  declarations: [
    AppComponent,
    QzComponent,
    HmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
