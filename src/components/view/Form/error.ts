import { Queries, errorClass, errorLifeTime } from './constants';

export class Error {
  showWarning() {
    const main = <HTMLElement>document.querySelector(Queries.container);
    const warning: HTMLElement = document.createElement('span');
    warning.classList.add(errorClass);
    warning.textContent = 'Извините, в этом разделе нет новостей!';
    main.prepend(warning);
    setTimeout((): void => warning.remove(), errorLifeTime);
  }
}
