import { Component } from '@/types';
import './Modal.scss';

export class Modal implements Component {
  el: HTMLDivElement;

  constructor() {
    this.el = document.createElement('div');
  }

  render() {
    this.el.id = 'modal';
    const closeButton = document.createElement('button');
    closeButton.textContent = 'Close';
    closeButton.onclick = () => {
      this.close();
    };

    const content = document.createElement('span');
    content.classList.add('modal__content');
    content.textContent = 'Some message';
    this.el.append(closeButton, content);

    document.body.prepend(this.el);
    document.body.style.overflow = 'hidden'
  }

  close() {
    this.el.remove();
    document.body.style.overflow = ''
  }
}
