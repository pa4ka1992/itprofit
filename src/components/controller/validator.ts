import { FormControl } from '@/types';
import { validationRules } from '../utils/validationRules';

export class Validator {
  validateFields(formNode: HTMLFormElement) {
    const data = new FormData(formNode);
    let isAllValid = true;

    validationRules.forEach((rule) => {
      const isValid = rule.handler(data.get(rule.name) as string);
      const inputNode = (formNode.elements as FormControl)[rule.name as keyof FormControl];

      if (inputNode instanceof HTMLInputElement) {
        if (!isValid) {
          inputNode?.parentElement?.setAttribute('error', rule.error);

          isAllValid = false;
        } else {
          inputNode?.parentElement?.setAttribute('error', '');
        }
      }
    });

    if (isAllValid) {
      return data;
    }

    return false;
  }
}
