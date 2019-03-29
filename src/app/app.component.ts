import { Component } from '@angular/core';
import {UnsplashService} from './unsplash.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  images;

  constructor(private service: UnsplashService) { }

  onTerm(term) {
    this.service.getImage(term).subscribe(response => this.images = response.results);
  }
}
