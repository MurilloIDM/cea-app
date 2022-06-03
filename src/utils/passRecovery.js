
export const validateOTP = (otp) => {

  if (!otp) {
    return {
      success: false,
      message: "O código não pode estar em branco! Favor preenchê-lo.",
    };
  }

  if (otp.length !== 4) {
    return {
      success: false,
      message: "O preenchimento do código está incompleto. Favor inserir os quatro dígitos.",
    };
  }

  return { success: true, message: "" };
}

export const hideEmail = (email) => {

  const g = email.split('@');

  const part1 = g[0].substring(g[0].length / 2, g[0].length);

  const part2 = g[1].substring(g[1].length / 2, g[1].length);

  const result = g[0].replace(part1, part1.replace(/./g, '*')).concat('@', g[1].replace(part2, part2.replace(/./g, '*')))

  return result;

}

