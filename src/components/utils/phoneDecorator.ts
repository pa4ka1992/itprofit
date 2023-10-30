import Inputmask from 'inputmask/dist/inputmask.es6.js';
import { FormField } from '../view/FormField/FormField';

export const phoneMask = '+375 (99) 999-99-99';

export const useMaskField = (formField: FormField) => {
  const im = new Inputmask(phoneMask);
  im.mask(formField.input);

  return formField;
};
