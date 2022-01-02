const REGEX_EMAIL = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi;

export const validateFormLead = ({ name, email, phone }) => {
  if (!name) {
    return {
      success: false,
      message: "O Nome Completo não pode estar em branco! Favor preenchê-lo.",
    };
  }

  if (!email) {
    return {
      success: false,
      message: "O E-mail não pode estar em branco! Favor preenchê-lo.",
    };
  }

  const emailRegex = new RegExp(REGEX_EMAIL);

  if (!emailRegex.test(email)) {
    return {
      success: false,
      message: "O valor informado para o E-mail é inválido! Digite um e-mail em um formato válido.",
    };
  }

  if (!phone) {
    return {
      success: false,
      message: "O Número de Contato não pode estar em branco! Favor preenchê-lo.",
    };
  }

  if (phone.length !== 11) {
    return {
      success: false,
      message: "O Número de Contato deve ser informado com o DDD.",
    };
  }

  return { success: true, message: "" }
}
