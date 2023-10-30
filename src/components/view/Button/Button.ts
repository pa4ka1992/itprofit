import { Component } from '@/types';
import './Button.scss';

export class Button implements Component {
  el: HTMLButtonElement;

  parent: HTMLElement;

  constructor(parent: HTMLElement, type: string, title: string) {
    this.el = document.createElement('button');
    this.parent = parent;

    this.el.setAttribute('type', type);
    this.el.textContent = title;
  }

  render() {
    this.el.classList.add('app__button');

    this.parent.append(this.el);
  }

  addListener(cb: () => void) {
    this.el.onclick = cb;
  }

  addClass(name: string) {
    this.el.classList.add(name);
  }
}
