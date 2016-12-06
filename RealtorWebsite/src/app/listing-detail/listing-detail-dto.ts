export class ListingDetailDto {

  public static fromJson(data: any): ListingDetailDto {
        return new ListingDetailDto(data._id, data._street, data._city,
            data._state, data._zipCode, data._houseType, data._bedrooms,
            data._bathrooms, data._squareFeet, data._overview, data._masterBedroom,
            data._fullBathrooms, data._halfBathrooms, data._diningKitchen,
            data._diningRoom, data._exteriorFeatures, data._otherRooms,
            data._stories, data._exterior, data._parking, data._price, data._mainPhoto, data._photos,
            data._status, data._style, data._yearBuilt, data._schoolDistrict);
    }

  constructor(private _id: number, private _street: string, private _city: string, private _state: string,
      private _zipCode: string, private _houseType: string, private _bedrooms: number, private _bathrooms: number,
      private _squareFeet: number, private _overview: string, private _masterBedroom: string,
      private _fullBathrooms: number, private _halfBathrooms: number, private _diningKitchen: boolean,
      private _diningRoom: boolean, private _exteriorFeatures: string[], private _otherRooms: string[],
      private _stories: number, private _exterior: string, private _parking: string, private _price: number,
      private _mainPhoto: string, private _photos: string[], private _status: string, private _style: string,
      private _yearBuilt: number, private _schoolDistrict: string) { }

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

  get overview(): string {
    return this._overview;
  }

  set overview(overview: string) {
    this._overview = overview;
  }

  get masterBedroom(): string {
    return this._masterBedroom;
  }

  set masterBedroom(masterBedroom: string) {
    this._masterBedroom = masterBedroom;
  }

  get fullBathrooms(): number {
    return this._fullBathrooms;
  }

  set fullBathrooms(fullBathrooms: number) {
    this._fullBathrooms = fullBathrooms;
  }

  get halfBathrooms(): number {
    return this._halfBathrooms;
  }

  set halfBathrooms(halfBathrooms: number) {
    this._halfBathrooms = halfBathrooms;
  }

  get diningKitchen(): boolean {
    return this._diningKitchen;
  }

  set diningKitchen(diningKitchen: boolean) {
    this._diningKitchen = diningKitchen;
  }

  get diningRoom(): boolean {
    return this._diningRoom;
  }

  set diningRoom(diningRoom: boolean) {
    this._diningRoom = diningRoom;
  }

  get exteriorFeatures(): string[] {
    return this._exteriorFeatures;
  }

  set exteriorFeatures(exteriorFeatures: string[]) {
    this._exteriorFeatures = exteriorFeatures;
  }

  get otherRooms(): string[] {
    return this._otherRooms;
  }

  set otherRooms(otherRooms: string[]) {
    this._otherRooms = otherRooms;
  }

  get stories(): number {
    return this._stories;
  }

  set stories(stories: number) {
    this._stories = stories;
  }

  get exterior(): string {
    return this._exterior;
  }

  set exterior(exterior: string) {
    this._exterior = exterior;
  }

  get parking(): string {
    return this._parking;
  }

  set parking(parking: string) {
    this._parking = parking;
  }

  get price(): number {
    return this._price;
  }

  set price(price: number) {
    this._price = price;
  }

  get mainPhoto(): string {
    return this._mainPhoto;
  }

  set mainPhoto(mainPhoto: string) {
    this._mainPhoto = mainPhoto;
  }

  get photos(): string[] {
    return this._photos;
  }

  set photos(photos: string[]) {
    this._photos = photos;
  }

  get status(): string {
    return this._status;
  }

  set status(status: string) {
    this._status = status;
  }

  get style(): string {
    return this._style;
  }

  set style(style: string) {
    this._style = style;
  }

  get yearBuilt(): number {
    return this._yearBuilt;
  }

  set yearBuilt(yearBuilt: number) {
    this._yearBuilt = yearBuilt;
  }

  get schoolDistrict(): string {
    return this._schoolDistrict;
  }

  set schoolDistrict(schoolDistrict: string) {
    this._schoolDistrict = schoolDistrict;
  }
}
