import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {ListingDetailDto} from './listing-detail-dto';
import {ContactAgentDto} from './contact-agent-dto';
import {ServerResponse} from '../server-response';

@Injectable()
export class ListingDetailService {

  constructor(private http: Http) { }

  getListingDetail(id: number): Observable<ListingDetailDto> {
    let url = 'http://localhost:8080/RealtorBackend/rest/listing-detail?id=' + id;

    return this.http.get(url, {method: 'Get'}).map( (res) => res.json())
        .map( (listing: any) => {
          let result: ListingDetailDto;
          if (listing) {
            result = ListingDetailDto.fromJson(listing);
          }
          console.log(result);
          return result;
        }).catch(this.handleError);
  }

  contactAgent(contactInfo: ContactAgentDto): Observable<ServerResponse> {
    let endpoint_url = 'http://localhost:8080/RealtorBackend/rest/contact-agent';
    let body = JSON.stringify(contactInfo);
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    return this.http.post(endpoint_url, body, options).map(res => res.json())
            .map((data: any) => ServerResponse.fromJson(data));
  }

  handleError(error: Response): Observable<any> {
    return Observable.throw(error.json()).error || 'Server not reachable';
  }
}
