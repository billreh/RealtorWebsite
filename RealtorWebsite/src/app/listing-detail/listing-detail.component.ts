import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ListingDetailService} from './listing-detail.service';
import {ListingDetailDto} from './listing-detail-dto';

@Component({
  selector: 'app-listing-detail',
  templateUrl: './listing-detail.component.html',
  styleUrls: ['./listing-detail.component.css']
})
export class ListingDetailComponent {
  _listingDetail: ListingDetailDto;

  constructor(private _route: ActivatedRoute, private _listingDetailService: ListingDetailService) {
    this._listingDetail = this._route.snapshot.data['_listingDetail'];
  }

  get listingDetail(): ListingDetailDto {
    console.log('dto: ' + this._listingDetail);
    return this._listingDetail;
  }
}
