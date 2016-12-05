import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ListingListDto} from './listing-list-dto';
import {ListingService} from './listing.service';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {
  private _listings: Array<ListingListDto>;

  constructor(private _router: Router, private _listingService: ListingService) {
    this._listingService.getListingList().subscribe( res => this._listings = res,
        error => console.log('error fetching listings: ' + error));
  }

  ngOnInit() {
  }

  detail(listing: ListingListDto) {
    this._router.navigate(['app-listing-detail', listing.id]);
  }

  get listings(): Array<ListingListDto> {
    return this._listings;
  }
}
