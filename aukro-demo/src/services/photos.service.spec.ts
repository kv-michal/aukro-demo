import {TestBed} from '@angular/core/testing';

import {PhotosService} from './photos.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {HttpClient} from "@angular/common/http";
import {of} from "rxjs";

describe('PhotosService', () => {
  let service: PhotosService;
  const exampleResponse = {
    introPart: [],
    mainPart: [{
      "type": "CrazyPricesItems",
      "visible": [],
      "moCode": "",
      "content": {
        "banner": {},
        "title": "test title",
        "items": Array(10).fill({
          "images": {
            "lists": {
              "original": [
                {
                  "id": 228650176,
                  "position": 0,
                  "titleImage": true,
                  "url": "https://test.jpeg",
                  "size": "ORIGINAL",
                  "thumbnailReady": true
                }
              ]
            }
          }
        })
      }
    }]
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        {
          provide: HttpClient,
          useValue: {
            get: () => of(exampleResponse)
          }
        }
      ]
    });
    service = TestBed.inject(PhotosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should map response to 4 photo items', (done) => {
    service.getRandomPhotos$().subscribe(photos => {
      expect(photos.length).toEqual(4);
      done();
    })
  });
});
