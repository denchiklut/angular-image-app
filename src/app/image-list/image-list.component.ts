import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.scss']
})
export class ImageListComponent {
  @Input() imageList: any[];
  dangerousStyle;
  trustedStyle;

  constructor(private sanitizer: DomSanitizer) { }

  getSpan(image) {
    this.dangerousStyle = `span ${Math.floor((image.height / (image.width / 250)) / 10) + 2}`;
    return this.trustedStyle = this.sanitizer.bypassSecurityTrustStyle(this.dangerousStyle);
  }
}
