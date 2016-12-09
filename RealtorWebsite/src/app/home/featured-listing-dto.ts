export class FeaturedListingDto {
  public static fromJson(data: any): FeaturedListingDto {
    return new FeaturedListingDto(data._id, data._mainPhoto);
  }

  constructor(private _id: number, private _mainPhoto: string) { }

  get id(): number {
    return this._id;
  }

  set id(id: number) {
    this._id = id;
  }

  get mainPhoto(): string {
    return this._mainPhoto;
  }

  set mainPhoto(mainPhoto: string) {
    this._mainPhoto = mainPhoto;
  }
}