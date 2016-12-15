/**
 * Created by billreh on 12/15/16.
 */
export class SearchDto {
  constructor(private _city: string, private _state: string, private _zipCode: string, private _houseType: string,
              private _bedrooms: number, private _bathrooms: number, private _squareFeet: number, private _price: number) { }


  get city(): string {
    return this._city;
  }

  set city(value: string) {
    this._city = value;
  }

  get state(): string {
    return this._state;
  }

  set state(value: string) {
    this._state = value;
  }

  get zipCode(): string {
    return this._zipCode;
  }

  set zipCode(value: string) {
    this._zipCode = value;
  }

  get houseType(): string {
    return this._houseType;
  }

  set houseType(value: string) {
    this._houseType = value;
  }

  get bedrooms(): number {
    return this._bedrooms;
  }

  set bedrooms(value: number) {
    this._bedrooms = value;
  }

  get bathrooms(): number {
    return this._bathrooms;
  }

  set bathrooms(value: number) {
    this._bathrooms = value;
  }

  get squareFeet(): number {
    return this._squareFeet;
  }

  set squareFeet(value: number) {
    this._squareFeet = value;
  }

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    this._price = value;
  }
}
