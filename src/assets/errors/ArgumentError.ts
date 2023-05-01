import { CustomError } from 'ts-custom-error';

class ArgumentError extends CustomError {
  public constructor(msg?: string) {
    super(msg);
  }
}

export default ArgumentError;
