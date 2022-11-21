import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {PhotoListComponent} from './photo-list/photo-list.component';
import {HttpClientModule} from "@angular/common/http";
import {ToggleComponent} from './toggle/toggle.component';

@NgModule({
  declarations: [
    AppComponent,
    PhotoListComponent,
    ToggleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
