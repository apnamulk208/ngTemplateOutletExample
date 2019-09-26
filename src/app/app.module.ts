import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardOrListViewComponent } from './card-or-list-view/card-or-list-view.component';
import { CardItemDirective } from './carditem.directive';
import { ListItemDirective } from './listitem.directive';


@NgModule({
  declarations: [
    AppComponent,
    CardOrListViewComponent,
    CardItemDirective,
    ListItemDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
