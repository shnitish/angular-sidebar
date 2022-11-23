import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AutoFocusDirective } from "./directives/autoFocus.directive";

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    AutoFocusDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
