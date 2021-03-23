import validatorFactory from "./validatorFactory";

console.log();

const loginValidator = validatorFactory({
  email: { type: "email" },
  password: { type: "string", empty: false }
});

export default loginValidator;