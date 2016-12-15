import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {ListingListDto} from './listing-list-dto';
import {SearchDto} from "./search-dto";

@Injectable()
export class ListingService {

  constructor(private http: Http) { }

  getListingList(): Observable<Array<ListingListDto>> {
    let url = 'http://localhost:8080/RealtorBackend/rest/listings';

    return this.http.get(url, {method: 'Get'}).map( (res) => res.json())
        .map( (listings: Array<any>) => {
          let result: Array<ListingListDto> = [];
          if (listings) {
            listings.forEach( (data) => result.push(ListingListDto.fromJson(data)));
          }
          return result;
        }).catch(this.handleError);
  }

  getListingListSearch(searchDto: SearchDto): Observable<Array<ListingListDto>> {
    let endpoint_url = 'http://localhost:8080/RealtorBackend/rest/listings/search';
    let body = JSON.stringify(searchDto);
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    return this.http.post(endpoint_url, body, options).map(res => res.json())
          .map((listings: Array<any>) => {
            let result: Array<ListingListDto> = [];
            if(listings) {
              listings.forEach( (data) => result.push(ListingListDto.fromJson(data)));
            }
            return result;
          }).catch(this.handleError);
  }

  handleError(error: Response): Observable<any> {
    return Observable.throw(error.json()).error || 'Server not reachable';
  }
}
