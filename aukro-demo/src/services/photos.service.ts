import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {PhotoItem, HomepageResponse} from "../models/photo-response.model";

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getRandomPhotos$(): Observable<PhotoItem[]> {
    return this.httpClient.get<HomepageResponse>('https://aukro.cz/backend/api/homepage')
      .pipe(
        map(response => {
          const items = response.mainPart.find(item => item.type === "CrazyPricesItems")?.content.items || [];
          const randomPhotos = [];
          for(let i = 0; i < 4; i++) {
            const randomIndex = Math.floor(Math.random() * (items.length - 1)) + 1;
            const randomItem = items.splice(randomIndex, 1)[0];
            randomPhotos.push(randomItem);
          }
          return randomPhotos
        })
      )
  }
}
