export const validateEmail = (email) => {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
}

export const emailValidateMessage = "Por favor ingresa un correo electronico valido como @gmail.com, @hotmail.com, etc."
