export class ListingDetailDto {
  private _street: string;
  private _city: string;
  private _state: string;
  private _zipCode: string;
  private _houseType: string;
  private _bedrooms: number;
  private _bathrooms: number;
  private _squareFeet: number;
  private _overview: string;
  private _masterBedroom: string;
  private _fullBathrooms: number;
  private _halfBathrooms: number;
  private _diningKitchen: string;
  private _diningRoom: boolean;
  private _exteriorFeatures: string[];
  private _otherRooms: string[];
  private _stories: number;
  private _exterior: string;
  private _parking: string;

  constructor() { }

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

  get diningKitchen(): string {
    return this._diningKitchen;
  }

  set diningKitchen(diningKitchen: string) {
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
}
