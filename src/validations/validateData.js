const dataValidation = {
    validatePassword: (password) => {
        let hasLength = false;
        let hasCapitals = false;
        let hasNumbers = false;
        let numbersCount = 0;
        let capitalsCount = 0;
        if (password.length >= 6) { //to be fixed
            hasLength = true;
        }
        for (let i = 0; i < password.length; i++) {
            if (password.charCodeAt(i) >= 49 && password.charCodeAt(i) <= 57) {
                numbersCount++;
                console.log(`NUMBERS: ${numbersCount}`);
                if (numbersCount >= 3) {
                    hasNumbers = true;
                }
            }
            if (password.charCodeAt(i) >= 65 && password.charCodeAt(i) <= 90) {
                capitalsCount++;
                console.log(`CAPITALS: ${capitalsCount}`);
                if (capitalsCount >= 1) {
                    hasCapitals = true;
                }
            }
        }
        if (hasLength && hasNumbers && hasCapitals) {
            return password;
        }
        else {
            let msg = "";
            if (hasCapitals == false) {
                msg = "Password must contain at least 1 capital letter"; //to be fixed
                console.log(msg);
            }
            if (hasNumbers == false) {
                msg = "Password must contain at least 3 numbers";
                console.log(msg);
            }
            if (hasLength == false) {
                msg = "Password must be at least 6 characters long";
                console.log(msg);
            }
        }
    }
}
module.exports = dataValidation;