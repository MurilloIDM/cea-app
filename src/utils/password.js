const REGEX_PASSWORD = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,8}$/g;

export const validatePassword = ({password}) => {

    if(!password){
        return{
            success: false,
            message: "A senha não pode estar em branco! Favor preenchê-la.",
        };
    }

    const passwordRegex = new RegExp(REGEX_PASSWORD);

    if(!passwordRegex.test(password)){
        return{
            success: false,
            message: "O valor informado para a senha é inválido! Digite uma senha em um formato válido.",
        };
    }

    return {success:true, message:""};
}