import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PhotoListComponent} from './photo-list.component';
import {By} from "@angular/platform-browser";
import {PhotoItem} from "../../models/photo-response.model";

describe('PhotoListComponent', () => {
  let component: PhotoListComponent;
  let fixture: ComponentFixture<PhotoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhotoListComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render 4 grid items', () => {
    component.photos = Array(4).fill({
      "id": 1111,
      "name": "test 1",
      "images": {
        "lists": {
          "original": [
            {
              "url": "https://test.jpeg"
            }
          ]
        }
      },
    })
    fixture.detectChanges();
    const photoElems = fixture.debugElement.queryAll(By.css('.photo'))
    expect(photoElems.length).toEqual(4);
  });
});
