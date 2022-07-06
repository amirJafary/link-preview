export const validate = (data) => {
    const errors = {};
    if (!data.name.trim()) {
        errors.name = 'User name required';
    } else {
        delete errors.name;
    }

    if (!data.email) {
        errors.email = 'Email address is required'
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.email)) {
        errors.email = 'Email address is invalide'
    } else {
        delete errors.email
    }

    if (!data.password) {
        errors.password = 'Password is required'
    } else if (data.password.length < 6) {
        errors.password = 'Your password need to be 6 character or more'
    } else {
        delete errors.password
    }

    if (!data.confirmPassword) {
        errors.confirmPassword = 'Confirm your password'
    } else if (data.password !== data.confirmPassword) {
        errors.confirmPassword ='Confirm password not match'
    }else{
        delete errors.confirmPassword
    }

    if(data.isAccepted){
        delete errors.isAccepted
    }else{
        errors.isAccepted='You should read and accept terms'
    }

    return errors;
}