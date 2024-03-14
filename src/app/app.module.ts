import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './components/form/form.component';
import { CardComponent } from './components/card/card.component';
import { CardNotFoundComponent } from './components/card-not-found/card-not-found.component';
import { FilterInputComponent } from './components/filter-input/filter-input.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    CardComponent,
    CardNotFoundComponent,
    FilterInputComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
}
)
 export class AppModule { }