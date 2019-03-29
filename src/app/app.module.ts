import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { UnsplashService } from './unsplash.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ImageListComponent } from './image-list/image-list.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    ImageListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [UnsplashService],
  bootstrap: [AppComponent]
})
export class AppModule { }
