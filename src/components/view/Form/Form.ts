import { AppController } from '@/components/controller/controller';
import '../FormField/FormField';
import './Form.scss';

export class Form extends HTMLFormElement {
  private appController: AppController;

  constructor() {
    super();
    this.appController = new AppController();
    const { validator, api } = this.appController;

    this.addEventListener('submit', (e) => {
      e.preventDefault();

      const data = validator.validateFields(this);

      if (data) {
        Array.from(this.elements).forEach((el) => {
          if (el instanceof HTMLInputElement) {
            el.value = '';
          }
        });

        api.registerUser(data);
      }
    });
  }
}

customElements.define('app-form', Form, { extends: 'form' });
