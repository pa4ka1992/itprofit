import { Component } from '@/types';
import './Modal.scss';
import { Button } from '../Button/Button';

export class Modal implements Component {
  el: HTMLDivElement;

  constructor() {
    this.el = document.createElement('div');
  }

  render() {
    this.el.id = 'modal';
    const closeButton = new Button(this.el, 'button', 'Close');
    closeButton.addListener(() => {
      this.close();
    });
    closeButton.addClass('close__button');
    closeButton.render();

    const content = document.createElement('span');
    content.classList.add('modal__content');
    content.textContent = 'Some message';
    content.onmousedown = (e) => {
      e.stopPropagation();
    };

    this.el.append(content);
    this.el.onmousedown = () => {
      this.close();
    };

    document.body.prepend(this.el);
    document.body.style.overflow = 'hidden';
  }

  close() {
    this.el.remove();
    document.body.style.overflow = '';
  }
}
