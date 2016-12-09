import { Component, OnInit } from '@angular/core';
import {FeaturedListingService} from './featured-listing.service';
import {FeaturedListingDto} from './featured-listing-dto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  private _featuredListingDtos: Array<FeaturedListingDto>;

  constructor(private _featuredListingService: FeaturedListingService) {
    this._featuredListingService.getFeaturedListings().subscribe(res => this._featuredListingDtos = res);
  }

  get featuredListingDtos(): Array<FeaturedListingDto> {
    return this._featuredListingDtos;
  }

  set featuredListingDtos(featuredListingDtos: Array<FeaturedListingDto>) {
    this._featuredListingDtos = featuredListingDtos;
  }
}
