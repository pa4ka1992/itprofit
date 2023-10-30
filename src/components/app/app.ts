import { AppController } from '../controller/controller';
import { AppView } from '../view/appView';

export class App {
  view: AppView;

  constructor() {
    const { api } = new AppController();
    this.view = new AppView(api);
  }

  render() {
    this.view.render();
  }
}
