import { Component } from '@/types';
import './Form.scss';
import { Api } from '@/components/controller/api';
import { FormField } from '../FormField/FormField';
import { validationRules } from '@/components/utils/validationRules';
import { useMaskField } from '@/components/utils/phoneDecorator';

export class Form implements Component {
  el: HTMLFormElement;

  message: HTMLSpanElement;

  parent: HTMLElement;

  api: Api;

  fields: FormField[];

  constructor(parent: HTMLElement, api: Api) {
    this.el = document.createElement('form');
    this.message = document.createElement('span');
    this.parent = parent;
    this.api = api;
    this.fields = [
      new FormField(this.el, validationRules.name),
      new FormField(this.el, validationRules.email),
      useMaskField(new FormField(this.el, validationRules.phone)),
      new FormField(this.el, validationRules.message),
    ];
  }

  render() {
    this.fields.forEach((field) => {
      field.render();
    });

    const button = document.createElement('button');
    button.setAttribute('type', 'submit');
    button.textContent = 'Send';

    this.el.id = 'form';
    this.el.append(button);

    this.el.onsubmit = (e) => {
      e.preventDefault();

      this.validateForm();
    };

    this.parent.append(this.el);
  }

  validateForm() {
    let isAllValid = true;
    this.message.textContent = '';
    this.fields.forEach((field) => {
      const isValid = field.validate();

      if (!isValid) {
        isAllValid = false;
      }
    });

    if (isAllValid) {
      this.api.registerUser(new FormData(this.el)).then((data) => {
        if (data.status === 'success') {
          if (data.msg) {
            this.message.textContent = data.msg;
            this.fields.forEach((field) => {
              field.clear();
            });
          }
        } else {
          this.message.textContent = 'Сервер недоступен';
        }

        this.el.append(this.message);
      });
    }
  }
}
