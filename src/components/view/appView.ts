import { Component } from '@/types';
import { Api } from '../controller/api';
import { Form } from './Form/Form';
import { Modal } from './Modal/Modal';
import { Button } from './Button/Button';

export class AppView implements Component {
  el: HTMLElement;

  form: Form;

  constructor(api: Api) {
    this.el = document.createElement('main');
    this.form = new Form(this.el, api);
  }

  render() {
    const modalButton = new Button(this.el, 'submit', 'Показать');

    modalButton.addListener(() => {
      const modal = new Modal();
      modal.render();
    });

    modalButton.addClass('modal__button');

    modalButton.render();
    document.body.append(this.el);

    this.form.render();
  }
}
