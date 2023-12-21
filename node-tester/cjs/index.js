const { validate, setLocales } = require("axe-api-validator");
const en = require("axe-api-validator/dist/i18n/en.json");

const data = {
  email: null,
};

const rules = {
  email: "required|email|min:1|max:50",
};

const main = async () => {
  setLocales(en);
  const result = await validate(data, rules);
  if (result.isValid) {
    throw new Error("The email should be invalid!");
  }

  const { message } = result.errors.email[0];
  if (message !== "The field field is required.") {
    throw new Error(`Unaccepted message: ${message}`);
  }

  console.log("Success!");
};

main();
