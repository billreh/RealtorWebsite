import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ListingDetailService} from './listing-detail.service';
import {ListingDetailDto} from './listing-detail-dto';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Message} from 'primeng/primeng';
import {ContactAgentDto} from './contact-agent-dto';
import '../../js/jquery.js';

@Component({
  selector: 'app-listing-detail',
  templateUrl: './listing-detail.component.html',
  styleUrls: ['./listing-detail.component.css']
})
export class ListingDetailComponent {
  private _listingDetail: ListingDetailDto;
  msgs: Message[] = [];
  theForm: FormGroup;
  thePhotos: any[];

  constructor(private _route: ActivatedRoute, private _listingDetailService: ListingDetailService, fb: FormBuilder,
        private _router: Router) {
    this._listingDetail = this._route.snapshot.data['_listingDetail'];
    this.thePhotos = [];
    this.theForm = fb.group({
      'theName': [null, Validators.compose([Validators.required, Validators.minLength(5)])],
      'theEmail': [null, Validators.compose([Validators.required, Validators.pattern('.*@.*\..*')])],
      'thePhone': '',
      'theMessage': ['I\'m interested in ' + this._listingDetail.street, Validators.required]
    });
    if(this._listingDetail.mainPhoto === undefined || this._listingDetail.mainPhoto === null || this._listingDetail.mainPhoto === '') {
      this.thePhotos.push({src: 'img/house.jpeg', alt: 'photo'});
    } else {
      this.thePhotos.push({src: 'img/' + this._listingDetail.id + '/' + this._listingDetail.mainPhoto, alt: 'photo'});
    }
    this._listingDetail.photos.forEach(photo => this.thePhotos.push({ src: 'img/' + this._listingDetail.id + '/' + photo}));
    if(this._router.navigated) {
      window.scrollTo(0, 0);
    }
  }

  submitForm(value: any) {
    let contactAgent = new ContactAgentDto(this._listingDetail.id, value.theName, value.theEmail, value.thePhone, value.theMessage);
    this._listingDetailService.contactAgent(contactAgent).subscribe( res => {
      if (res.status === 'OK') {
        this.theForm.reset();
        this.msgs.push({
          severity: 'success',
          summary: 'Thank You!',
          detail: 'Your request has been submitted to the listing agent.'
        });
      } else {
        this.msgs.push({
          severity: 'error',
          summary: 'Error',
          detail: res.statusMessage
        });
      }
    });
  }

  get listingDetail(): ListingDetailDto {
    return this._listingDetail;
  }
}
