const REGEX_PASSWORD = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])(?:([0-9a-zA-Z$*&@#])(?!\1)){8,}$/;

export const validateRegisterPassword = ({ password, repeatedPassword }) => {
  if (!password) {
    return {
      success: false,
      message: "A senha não pode estar em branco! Favor preenchê-la.",
    };
  }

  if (!repeatedPassword) {
    return {
      success: false,
      message: "O campo de confirmação de senha não pode estar em branco! Favor preenchê-lo.",
    };
  }

  if (!REGEX_PASSWORD.test(password) || !REGEX_PASSWORD.test(repeatedPassword)) {
    return {
      success: false,
      message: "A senha é inválida. Digite uma senha com no mínimo 8 caracteres, sendo eles maiúsculos, minúsculos," +
        " números e especiais como ($*&@#).",
    };
  }

  if (password !== repeatedPassword) {
    return {
      success: false,
      clearInputs: true,
      message: "As senhas digitadas não correspondem! Tente novamente.",
    };
  }

  return {
    success: true,
    message: "",
  };
}