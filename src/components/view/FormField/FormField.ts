import './FormField.scss';
import Inputmask from "inputmask";

export class FormField extends HTMLElement {
  error: HTMLSpanElement;

  input: HTMLInputElement;

  label: HTMLLabelElement;

  static get observedAttributes() {
    return ['error'];
  }

  constructor() {
    super();
    this.error = document.createElement('span');
    this.input = document.createElement('input');
    this.label = document.createElement('label');
    const name = this.getAttribute('name');

    if (name) {
      this.label.setAttribute('for', name);
      this.label.textContent = name;
      this.input.setAttribute('name', name);
      this.input.setAttribute('type', 'text');

      if (name === 'phone') {
        const im = new Inputmask('+375 (99) 999-99-99');
        im.mask(this.input);
      }
    }

    this.append(this.label, this.input, this.error);
  }

  attributeChangedCallback(name: string, _: string, newValue: string) {
    if (name === 'error') {
      this.error.textContent = newValue;
    }
  }
}

customElements.define('form-field', FormField);
