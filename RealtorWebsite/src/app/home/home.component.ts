import { Component, OnInit } from '@angular/core';
import {FeaturedListingService} from './featured-listing.service';
import {FeaturedListingDto} from './featured-listing-dto';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  private _featuredListingDtos: Array<FeaturedListingDto>;
  photos: any[];

  constructor(private _featuredListingService: FeaturedListingService, private _route: ActivatedRoute) {
    // this._featuredListingService.getFeaturedListings().subscribe(res => this._featuredListingDtos = res);
    this._featuredListingDtos = this._route.snapshot.data['_featuredListingDtos'];
    console.log(this._featuredListingDtos);
    this.photos = [];
    this._featuredListingDtos.forEach(dto => this.photos.push({src: 'img/' + dto.id + '/' + dto.mainPhoto,
      alt: dto.mainPhoto, link: '/app-listing-detail/' + dto.id, linkText: 'View this Home'}))
  }

  get featuredListingDtos(): Array<FeaturedListingDto> {
    return this._featuredListingDtos;
  }

  set featuredListingDtos(featuredListingDtos: Array<FeaturedListingDto>) {
    this._featuredListingDtos = featuredListingDtos;
  }
}
