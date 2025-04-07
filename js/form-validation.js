document.getElementById("orderForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Undviker att skicka formulär om input är felaktig

    let isValid = true;

    // Tar bort tidigare felmeddelanden när anv. klickar på skicka igen
    document.querySelectorAll(".error-message").forEach((element) => (element.textContent = ""));

    // Sparar formulärvärden
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const street = document.getElementById("street").value.trim();
    const postcode = document.getElementById("postcode").value.trim();
    const city = document.getElementById("city").value.trim();

    // Visar feltexten, generell funktion
    function showError(inputId, message) {
        const inputField = document.getElementById(inputId);
        const errorDiv = inputField.nextElementSibling;
        errorDiv.textContent = message;
        inputField.classList.add("is-invalid"); // Bootstrap-klass
        isValid = false;
    }

    function clearError(inputId) {
        let inputField = document.getElementById(inputId);
        let errorDiv = inputField.nextElementSibling;
        errorDiv.textContent = "";
        inputField.classList.remove("is-invalid");
    }

    // Hjälpfunktioner för validering med regexp
    function validateEmail(email) {
        const regEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regEx.test(email);
    }

    function validatePhone(phone) {
        const regEx = /^[0-9\-–—()]+$/;
        return regEx.test(phone);
    }

    function validatePostcode(postcode) {
        const regEx = /^(\d{5}|\d{3}\s\d{2})$/; // Godkänner både 12345 och 123 45
        return regEx.test(postcode);
    }

    function validateStringLength(input) {
        return !(input.length < 2 || input.length > 50);
    }

    // Valideringsfunktioner (anropar hjälpfunktioner)
    if (!validateStringLength(name)) showError("name", "Namnet måste vara minst 2 tecken och max 50 tecken.");
    else clearError("name");

    if (!validateEmail(email)) showError("email", "Ogiltig e-postadress.");
    else clearError("email");

    if (!validatePhone(phone)) showError("phone", "Ogiltigt telefonnummer. Numret får endast innehålla siffror, bindestreck och parenteser.");
    else clearError("phone");

    if (!validateStringLength(street)) showError("street", "Gatuadress måste vara minst 2 tecken och max 50 tecken.");
    else clearError("street");

    if (!validatePostcode(postcode)) showError("postcode", "Postnummer måste vara 5 siffror.");
    else clearError("postcode");

    if (!validateStringLength(city)) showError("city", "Ort måste vara minst 2 tecken och max 50 tecken.");
    else clearError("city");

    // Om allt är okej, skickas formuläret
    if (isValid) {
        const successAlert = document.getElementById('successAlert');
        successAlert.style.display = 'block';
        successAlert.style.opacity = '0';

        let opacity = 0;
        const fadeIn = setInterval(() => {
            opacity += 0.1;
            successAlert.style.opacity = opacity;
            if (opacity >= 1) clearInterval(fadeIn);
        }, 50);
    }
});

let product = JSON.parse(sessionStorage.getItem('chosenProduct'));     
document.getElementById('img').setAttribute('src', product.image);
document.getElementById('title').innerHTML = product.title;
document.getElementById('price').innerHTML = '$ ' + product.price;