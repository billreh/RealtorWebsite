/**
 * Created by billreh on 12/16/16.
 */
import {Component, Input} from '@angular/core';

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.css']
})

export class CarouselComponent {
  private _id: string;
  private _photos: any;
  private _dataInterval = '3000';

  constructor() {
  }

  get id(): string {
    return this._id;
  }

  @Input()
  set id(value: string) {
    this._id = value;
  }

  get photos(): any {
    return this._photos;
  }

  @Input()
  set photos(value: any) {
    this._photos = value;
  }

  get dataInterval(): string {
    return this._dataInterval;
  }

  @Input()
  set dataInterval(value: string) {
    this._dataInterval = value;
  }
}
