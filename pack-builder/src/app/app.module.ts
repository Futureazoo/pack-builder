import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { OtherPageComponent } from './pages/other-page/other-page.component';
import { HowToPageComponent } from './pages/how-to-page/how-to-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { StatsPageComponent } from './pages/stats-page/stats-page.component';
import { PickerComponent } from './components/picker/picker.component';
import { SelectionCardComponent } from './components/selection-card/selection-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    OtherPageComponent,
    HowToPageComponent,
    AboutPageComponent,
    StatsPageComponent,
    PickerComponent,
    SelectionCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
