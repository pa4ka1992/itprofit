export interface FormControl extends HTMLFormControlsCollection {
  name: HTMLInputElement;
  email: HTMLInputElement;
  phone: HTMLInputElement;
  message: HTMLInputElement;
}

export interface Component {
  el: HTMLElement;

  render: () => void;
}
