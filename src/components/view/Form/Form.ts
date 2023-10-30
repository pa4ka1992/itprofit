import { Component } from '@/types';
import './Form.scss';
import { Api } from '@/components/controller/api';
import { FormField } from '../FormField/FormField';
import { validationRules } from '@/components/utils/validationRules';
import { useMaskField } from '@/components/utils/phoneDecorator';
import { Button } from '../Button/Button';

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
    this.el.id = 'form';
    this.el.innerHTML = `
    <h3 class="form__title"> Форма пользователя </h3>
    `;
    this.el.onsubmit = (e) => {
      e.preventDefault();

      this.validateForm();
    };

    this.fields.forEach((field) => {
      field.render();
    });

    const sendButton = new Button(this.el, 'submit', 'Send');

    sendButton.render();
    this.message.classList.add('form__message');
    this.el.append(this.message);
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
            this.message.style.color = '#06ce8f';
            this.fields.forEach((field) => {
              field.clear();
            });
          }
        } else {
          this.message.textContent = 'Сервер недоступен';
          this.message.style.color = '#ff6e6e';
        }
      });

      setTimeout(() => {
        this.message.textContent = '';
      }, 5000);
    }
  }
}
