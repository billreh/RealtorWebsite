import { Component, OnInit } from '@angular/core';
import {FeaturedListingDto} from './featured-listing-dto';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  private _featuredListingDtos: Array<FeaturedListingDto>;
  photos: any[];

  constructor(private _route: ActivatedRoute, private _router: Router) {
    this._featuredListingDtos = this._route.snapshot.data['_featuredListingDtos'];
    console.log(this._featuredListingDtos);
    this.photos = [];
    this._featuredListingDtos.forEach(dto => this.photos.push({src: 'img/' + dto.id + '/' + dto.mainPhoto,
      alt: dto.mainPhoto, link: '/app-listing-detail/' + dto.id, linkText: 'View this Home'}))
    if(this._router.navigated) {
      window.scrollTo(0, 0);
    }
  }

  get featuredListingDtos(): Array<FeaturedListingDto> {
    return this._featuredListingDtos;
  }

  set featuredListingDtos(featuredListingDtos: Array<FeaturedListingDto>) {
    this._featuredListingDtos = featuredListingDtos;
  }
}
