export class ServerResponse {

  public static fromJson(data: any): ServerResponse {
    return new ServerResponse(data._status, data._statusCode, data._statusMessage);
  }

  constructor(private _status: string, private _statusCode: number,
    private _statusMessage: string) { }

  get status(): string {
    return this._status;
  }

  set status(status: string) {
    this._status = status;
  }

  get statusCode(): number {
    return this._statusCode;
  }

  set statusCode(statusCode: number) {
    this._statusCode = statusCode;
  }

  get statusMessage(): string {
    return this._statusMessage;
  }

  set statusMessage(statusMessage: string) {
    this._statusMessage = statusMessage;
  }
}
