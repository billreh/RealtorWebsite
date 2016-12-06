export class ContactAgentDto {
  constructor(private _listingId: number, private _name: string,
    private _email: string, private _phone: string, private _message: string) { }

  get listingId(): number {
    return this._listingId;
  }

  set listingId(listingId: number) {
    this._listingId = listingId;
  }

  get name(): string {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }

  get email(): string {
    return this._email;
  }

  set email(email: string) {
    this._email = email;
  }

  get phone(): string {
    return this._phone;
  }

  set phone(phone: string) {
    this._phone = phone;
  }

  get message(): string {
    return this._message;
  }

  set message(message: string) {
    this._message = message;
  }
}