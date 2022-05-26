const REGEX_EMAIL = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi;

export const validateLogin = ({email}) =>{

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
    
    return { success: true, message: "" };
}

