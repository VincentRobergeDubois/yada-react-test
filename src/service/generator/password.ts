const LOWER_CASE_CHARS = "abcdefghijklmnopqrstuvwxyz";
const UPPER_CASE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const NUMBERS_CHARS = "0123456789";
const SPECIAL_CHARS = "!@#$%&*()";

const getRandomLowerCaseChar = () => {
  return ;
};

const generate = (length: number = 12) => {
  let password = "";
  const possibilities = LOWER_CASE_CHARS + UPPER_CASE_CHARS + NUMBERS_CHARS + SPECIAL_CHARS;
  for (let index = 0; index < length; index += 1) {
    password += possibilities[Math.random() * possibilities.length];
  }
  return password;
};
