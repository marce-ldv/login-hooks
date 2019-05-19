const model = {
  user_name: "",
  password: "",
  re_password: "",
  email: ""
};

export function newModel(modelParams = model) {
  return modelParams;
}
