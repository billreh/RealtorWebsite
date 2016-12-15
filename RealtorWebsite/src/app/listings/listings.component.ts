import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ListingListDto} from './listing-list-dto';
import {ListingService} from './listing.service';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {SearchDto} from './search-dto';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {
  private _listings: Array<ListingListDto>;
  private _form: FormGroup;

  constructor(private _router: Router, private _listingService: ListingService, fb: FormBuilder) {
    this._listingService.getListingList().subscribe( res => this._listings = res,
        error => console.log('error fetching listings: ' + error));
    this._form = fb.group({
      'city': [null, Validators.minLength(3)],
      'state': [null, Validators.compose([Validators.minLength(2), Validators.maxLength(2)])],
      'zipCode': [null, Validators.compose([Validators.minLength(5), Validators.maxLength(5)])],
      'houseType': [null],
      'bedrooms': [null, Validators.pattern('[1-9]')],
      'bathrooms': [null, Validators.pattern('[1-9]\.?[0,5]?')],
      'squareFeet': [null, Validators.pattern('[0-9]{2,5}')],
      'price': [null, Validators.pattern('[0-9]{5,7}')]
    });
  }

  ngOnInit() {
  }

  detail(listing: ListingListDto) {
    this._router.navigate(['app-listing-detail', listing.id]);
  }

  submitForm(value: any) {
    let searchDto = new SearchDto(value.city, value.state, value.zipCode, value.houseType, value.bedrooms,
        value.bathrooms, value. squareFeet, value.price);
    console.log(searchDto);
    this._listingService.getListingListSearch(searchDto).subscribe( res => this._listings = res,
      error => console.log('error fetching listings: ' + error));
  }

  get listings(): Array<ListingListDto> {
    return this._listings;
  }

  get form(): FormGroup {
    return this._form;
  }

  set form(value: FormGroup) {
    this._form = value;
  }
}
