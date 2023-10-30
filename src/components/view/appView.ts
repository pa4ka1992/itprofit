import { Component } from '@/types';
import { Api } from '../controller/api';
import { Form } from './Form/Form';
import { Modal } from './Modal/Modal';

export class AppView implements Component {
  el: HTMLElement;

  form: Form;

  constructor(api: Api) {
    this.el = document.createElement('main');
    this.form = new Form(this.el, api);
  }

  render() {
    this.el.classList.add('container');
    const modalButton = document.createElement('button');
    modalButton.textContent = 'Modal';

    modalButton.onclick = () => {
      const modal = new Modal();
      modal.render();
    };

    this.el.append(modalButton);
    document.body.append(this.el);

    this.form.render();
  }
}
