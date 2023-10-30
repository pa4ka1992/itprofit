import Inputmask from 'inputmask/dist/inputmask.es6.js';
import { phoneMask } from './phoneDecorator';

export interface ValidationRule {
  name: string;
  type: string;
  handler: (val: string | null) => boolean;
  error: string;
}

function isNotEmpty(val: string | null) {
  return !!val;
}

function isEmail(val: string | null) {
  if (!val) {
    return false;
  }

  const regExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regExp.test(val);
}

function isPhone(val: string | null) {
  const regExp = /\d{9}/;
  const unmaskedVal = Inputmask.unmask(val, { mask: phoneMask });
  return regExp.test(unmaskedVal);
}

export const validationRules = {
  name: { name: 'Имя', type: 'text', handler: isNotEmpty, error: 'Введите имя' },
  email: { name: 'Электронная почта', type: 'text', handler: isEmail, error: 'Почта не валидна' },
  phone: { name: 'Телефон', type: 'text', handler: isPhone, error: 'Телефон не валиден' },
  message: { name: 'Сообщение', type: 'text', handler: isNotEmpty, error: 'Введите сообщение' },
};
