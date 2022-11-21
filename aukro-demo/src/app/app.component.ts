import {Component, OnInit} from '@angular/core';
import {PhotosService} from "../services/photos.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  grayscaleFilter: boolean = false;
  photos: any[] = [];

  constructor(
    public photoService: PhotosService
  ) {
  }

  ngOnInit(): void {
    this.getPhotos();
  }

  getPhotos(): void {
    this.photoService.getRandomPhotos$()
      .subscribe(photos => this.photos = photos);
  }
}
