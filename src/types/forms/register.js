const model = {
  user_name: "",
  password: "",
  re_password: "",
  email: ""
};

export const formType = [
  {name: 'user_name', label: 'Nombre de usuario', input: 'text'},
  {name: 'password', label: 'Contraseña', input: 'password'},
  {name: 're_password', label: 'Vuelva a escribir la contraseña', input: 'password'},
  {name: 'email', label: 'Ingrese el email', input: 'email'},
];

export function newModel(model = model) {
  return model;
}
