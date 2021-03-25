import validatorFactory from "./validatorFactory";

let registerValidator = validatorFactory({
  location: { type: 'string' },
  name: { type: 'string' },
  email: { type: 'string' },
  phone: { type: "string", empty: false },
  password: { type: "string", empty: false }
});

export default registerValidator;