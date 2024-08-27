let passLength = document.getElementById("userInput");
let returnPass = document.getElementById("password");

passLength.addEventListener('input', () => {
      if (passLength.value.length > 0) {
            returnPass.style.display = 'block'
            let response = randomPass(passLength.value);
            if (response == false) {
                  returnPass.innerHTML = "Minimum Length Password Should Be 8"
            } else if (response.length <= 50 ) {
                  returnPass.innerHTML = `Password Is :<br> ${response}`;
            } else if (response.length > 50 ) {
                  returnPass.innerHTML = "MAXIMUM LENGTH IS 50 CHARACTERS"
            }
            
      } else {
            returnPass.style.display = 'none'
      }


      
})




function randomPass(length) {
    let num = "1234567890";
    let specialChar = "!@#$%^&*()~`><.,";
    let caps = "QWERTYUIOPLKJHGFDSAZXCVBNM";
    let alphabets = "qwertyuiopasdfghjklzxmnbcv";
    let total = num + specialChar + caps + alphabets;

    let password = "";

    if (length >= 8) {
        for (let i = 0; i < length; i++) {
            const rndInt = Math.floor(Math.random() * total.length);
            password += total[rndInt];
        }

        return password;
    } else {
        return false; 
    }
}

