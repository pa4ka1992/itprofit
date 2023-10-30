import { Api } from './api';

export class AppController {
  api: Api;

  constructor() {
    this.api = new Api();
  }
}
