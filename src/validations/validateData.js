function validatePassword(password) {
    let hasLength = false;
    let hasCharacters = false;
    let hasNumbers = false;
    let numbersCount = 0;
    for (let i = 0; i < password.length; i++) {
        if (i >= 6) {
            hasLength = true;
        }
        if (password.charCodeAt(i) >= 49 && password.charCodeAt(i) <= 57) {
            numbersCount++;
            if (numbersCount >= 3) {
                hasNumbers = true;
            }
        }
    }
    console.log(hasNumbers);
}
validatePassword("Ivancho13");