export enum HttpErrorCode {
  Success = 200,
  BadRequest = 400,
  NotFound = 404,
  InternalServerError = 500
}

export class Response<T> {
  codeError!: HttpErrorCode;
  msj!: string;
  data!: T;
}

export class RegistroResponse {
  codeError!: HttpErrorCode;
  msj!: string;
}
