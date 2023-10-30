// import Inputmask from 'inputmask';
import { ValidationRule } from '@/components/utils/validationRules';
import './FormField.scss';
import { Component } from '@/types';

export class FormField implements Component {
  el: HTMLElement;

  error: HTMLSpanElement;

  input: HTMLInputElement;

  label: HTMLLabelElement;

  parent: HTMLFormElement;

  props: ValidationRule;

  constructor(parent: HTMLFormElement, props: ValidationRule) {
    this.parent = parent;
    this.props = props;
    this.el = document.createElement('div');
    this.error = document.createElement('span');
    this.input = document.createElement('input');
    this.label = document.createElement('label');
  }

  render() {
    this.label.setAttribute('for', this.props.name);
    this.label.textContent = this.props.name;
    this.label.classList.add('form__field-label');

    this.input.setAttribute('name', this.props.name);
    this.input.setAttribute('type', this.props.type);
    this.input.classList.add('form__field-input');

    this.error.classList.add('form__field-error');

    this.el.classList.add('form__field');
    this.el.append(this.label, this.input, this.error);

    this.parent.append(this.el);
  }

  validate() {
    const isValid = this.props.handler(this.input.value);

    if (isValid) {
      this.error.textContent = '';
    } else {
      this.error.textContent = this.props.error;
    }

    return isValid;
  }

  clear() {
    this.input.value = '';
  }
}
