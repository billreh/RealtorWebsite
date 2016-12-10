import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ListingDetailService} from './listing-detail.service';
import {ListingDetailDto} from './listing-detail-dto';
import {FormsModule, FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Message} from 'primeng/primeng';
import {ContactAgentDto} from './contact-agent-dto';

@Component({
  selector: 'app-listing-detail',
  templateUrl: './listing-detail.component.html',
  styleUrls: ['./listing-detail.component.css']
})
export class ListingDetailComponent {
  private _listingDetail: ListingDetailDto;
  msgs: Message[] = [];
  images: any[];
  theForm: FormGroup;

  constructor(private _route: ActivatedRoute, private _listingDetailService: ListingDetailService, fb: FormBuilder) {
    this._listingDetail = this._route.snapshot.data['_listingDetail'];
    this.images = [];
    this.theForm = fb.group({
      'theName': [null, Validators.compose([Validators.required, Validators.minLength(5)])],
      'theEmail': [null, Validators.compose([Validators.required, Validators.pattern('.*@.*\..*')])],
      'thePhone': '',
      'theMessage': ['I\'m interested in ' + this._listingDetail.street, Validators.required]
    });
    this.images.push({source: 'img/' + this._listingDetail.id + '/' + this._listingDetail.mainPhoto, alt: this._listingDetail.mainPhoto});
    this._listingDetail.photos.forEach(photo => this.images.push({source:'img/' + this._listingDetail.id + '/' + photo, alt: photo}));
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
