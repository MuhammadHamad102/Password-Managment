let pass = document.getElementById("password");
let str = document.getElementById("strength");
let msg = document.getElementById("message");
let advice = document.getElementById("bottomMessage");
let num = document.getElementById("Numb");
let loCase = document.getElementById("Lc");
let upCase = document.getElementById("Uc");
let sChar = document.getElementById("Schar");

let numbers = "1234567890";
let specialChar = "~`!@#$%^&*()_+=-}{][\\|':;?><,./";
let caps = "QWERTYUIOPLKJHGFDSAZXCVBNM";
let alphabets = "qwertyuioplkjhgfdsazxcvbnm";

pass.addEventListener('input', () => {
    if (pass.value.length > 0) {
        msg.style.display = 'block';
        advice.style.display = 'block';
    } else {
        msg.style.display = 'none';
        advice.style.display = 'none';
    }

    let hasNumber = Array.from(numbers).some(num => pass.value.includes(num));
    let hasLowerCase = Array.from(alphabets).some(letter => pass.value.includes(letter));
    let hasUpperCase = Array.from(caps).some(letter => pass.value.includes(letter));
    let hasSpecialChar = Array.from(specialChar).some(char => pass.value.includes(char));


    num.style.color = hasNumber ? 'green' : 'red';
    loCase.style.color = hasLowerCase ? 'green' : 'red';
    upCase.style.color = hasUpperCase ? 'green' : 'red';
    sChar.style.color = hasSpecialChar ? 'green' : 'red';
    num.style.color = hasNumber ? 'green' : 'red';

    let strength = 0;
    if (hasLowerCase) {
        strength++;
    }
    if (hasUpperCase) {
        strength++;
    }
    if (hasNumber) {
        strength++;
    }
    if (hasSpecialChar) {
        strength++;
    }


    if (pass.value.length < 4 && strength < 3) {
        str.innerHTML = "Weak";
        pass.style.borderColor = "red";
        msg.style.color = "red";
        msg.style.backgroundColor = "transparent";
        advice.innerHTML = "Add Given Features And Increase Length As Well";
        advice.style.color = "red";
    } else if (pass.value.length >= 4 && pass.value.length < 8 && strength >= 2 && strength < 4) {
        str.innerHTML = "Medium";
        pass.style.borderColor = "yellow";
        msg.style.color = "yellow";
        msg.style.backgroundColor = "transparent";
        advice.innerHTML = "Password Of Minimum 8 Characters Is Recommended With Above Criteria Fulfilled";
        advice.style.color = "yellow";
    } else if (pass.value.length >= 8 && strength >= 4) {
        str.innerHTML = "Strong";
        pass.style.borderColor = "green";
        msg.style.color = "green";
        msg.style.backgroundColor = "transparent";
        advice.innerHTML = "Perfect !";
        advice.style.color = "green";
    }

});