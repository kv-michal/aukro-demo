import {Component, Input} from '@angular/core';
import {PhotoItem} from "../../models/photo-response.model";

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent {
  @Input() photos: PhotoItem[] = [];
  @Input() grayscaleFilter: boolean = false;
}
