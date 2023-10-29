interface ValidationRule {
  name: string;
  handler: (val: string) => boolean;
  error: string;
}

function isNotEmpty(val: string) {
  return !!val;
}

function isEmail(val: string) {
  const regExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regExp.test(val);
}

export const validationRules: ValidationRule[] = [
  { name: 'name', handler: isNotEmpty, error: 'name is required' },
  { name: 'email', handler: isEmail, error: 'email is invalid' },
  { name: 'phone', handler: isNotEmpty, error: 'phone is required' },
  { name: 'message', handler: isNotEmpty, error: 'messge is required' },
];
