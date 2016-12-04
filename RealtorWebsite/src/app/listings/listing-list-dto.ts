export class ListingListDto {

  public static fromJson(data: any): ListingListDto {
        return new ListingListDto(data._id, data._street, data._city,
            data._state, data._zipCode, data._houseType, data._bedrooms,
            data._bathrooms, data._squareFeet, data._price);
    }

  constructor(private _id: number, private _street: string, private _city: string, private _state: string,
      private _zipCode: string, private _houseType: string, private _bedrooms: number, private _bathrooms: number,
      private _squareFeet: number, private _price: number) { }


  get id(): number {
    return this._id;
  }

  set id(id: number) {
    this._id = id;
  }

  get street(): string {
    return this._street;
  }

  set street(street: string) {
    this._street = street;
  }

  get city(): string {
    return this._city;
  }

  set city(city: string) {
    this._city = city;
  }

  get state(): string {
    return this._state;
  }

  set state(state: string) {
    this._state = state;
  }

  get zipCode(): string {
    return this._zipCode;
  }

  set zipCode(zipCode: string) {
    this._zipCode = zipCode;
  }

  get houseType(): string {
    return this._houseType;
  }

  set houseType(houseType: string) {
    this._houseType = houseType;
  }

  get bedrooms(): number {
    return this._bedrooms;
  }

  set bedrooms(bedrooms: number) {
    this._bedrooms = bedrooms;
  }

  get bathrooms(): number {
    return this._bathrooms;
  }

  set bathrooms(bathrooms: number) {
    this._bathrooms = bathrooms;
  }

  get squareFeet(): number {
    return this._squareFeet;
  }

  set squareFeet(squareFeet: number) {
    this._squareFeet = squareFeet;
  }

  get price(): number {
    return this._price;
  }

  set price(price: number) {
    this._price = price;
  }
}
