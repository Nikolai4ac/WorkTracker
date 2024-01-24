const dataValidation = {
    validatePassword: function (password) {
        let hasLength = false;
        let hasCapitals = false;
        let hasNumbers = false;
        let numbersCount = 0;
        let capitalsCount = 0;
        let status = "no";
        if (password.length >= 6) {
            hasLength = true;
        }
        for (let i = 0; i < password.length; i++) {
            if (password.charCodeAt(i) >= 49 && password.charCodeAt(i) <= 57) {
                numbersCount++;
                console.log(`NUMBERS: ${numbersCount + 1}`); 
                if (numbersCount >= 3) {
                    hasNumbers = true;
                }
            }
            if (password.charCodeAt(i) >= 65 && password.charCodeAt(i) <= 90) {
                capitalsCount++;
                console.log(`CAPITALS: ${capitalsCount + 1}`);
                if (capitalsCount >= 1) {
                    hasCapitals = true;
                }
            }
        }
        if (hasLength && hasNumbers && hasCapitals) {
            status = "OK";
            return {password, status}
        }
        else {
            let msg = "";
            if (hasCapitals == false) {
                msg+="Password must contain at least 1 capital letter" + "<br>";
            }
            if (hasNumbers == false) {
                msg +="Password must contain at least 3 numbers" + "<br>";
            }
            if (hasLength == false) {
                msg+="Password must be at least 6 characters long" + '<br>';
            }
            return { password, status, msg };
        }
    },
    validateUsername:function (username) {
        let status = "no";
        let hasLength = false;
        let msg = "";
        if (username.length >= 6) {
            hasLength = true;
        }
        if (hasLength) {
            status = "OK";
            return {username, status, msg}
        } else {
            msg = `Username must be at least 6 characters long`;
            return { username, status, msg };
        }
    }
}
module.exports = dataValidation;

