import { CustomError } from 'ts-custom-error';

class LocaleMissingError extends CustomError {
  constructor(msg: string) {
    super(`missing locale [${msg}]`);
  }
}

export default LocaleMissingError;
