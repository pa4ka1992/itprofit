import { Api } from './api';
import { Validator } from './validator';

export class AppController {
  validator: Validator;

  api: Api;

  constructor() {
    this.validator = new Validator();
    this.api = new Api();
  }
}
