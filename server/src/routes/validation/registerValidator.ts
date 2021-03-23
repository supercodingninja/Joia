import validatorFactory from "./validatorFactory";

let registerValidator = validatorFactory({
  email: { type: "email" },
  password: { type: "string", empty: false }
});

export default registerValidator;