// Variables en reprenant les id du formulaire HTML
// getElementById va aller chercher dans le DOM l'id

const inputNom = document.getElementById("NomInput");
const inputPrenom = document.getElementById("PrenomInput");
const inputEmail = document.getElementById("EmailInput");
const inputPassword = document.getElementById("PasswordInput");
const inputValidatePassword = document.getElementById("ValidatePasswordInput");
const btnInscription = document.getElementById("btn-inscription");

// Ecouteur d'événement : keyup => déclenché au moment où on relâche la touche du clavier

inputNom.addEventListener("keyup", validateForm);
inputPrenom.addEventListener("keyup", validateForm);
inputEmail.addEventListener("keyup", validateForm);
inputPassword.addEventListener("keyup", validateForm);
inputValidatePassword.addEventListener("keyup", validateForm);

// Fonction : objectif de valider le formulaire

function validateForm() {
    const nomOK = validateRequired(inputNom);
    const prenomOK = validateRequired(inputPrenom);
    const emailOK = validateEmail(inputEmail);
    const passwordOK = validatePassword(inputPassword);
    const passwordConfirmOK = validateConfirmPassword(inputPassword, inputValidatePassword);

    if (nomOK && prenomOK && emailOK && passwordOK && passwordConfirmOK) {
        btnInscription.disabled = false;
    }
    else {
        btnInscription.disabled = true;
    }
}

// Fonction avec les conditions requis pour valider le formulaire
// "is-valid" : classe Bootstrap permettant de valider un champ

function validateRequired(input) {
    if (input.value != "") {
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    }
    else {
        input.classList.add("is-invalid");
        input.classList.remove("is-valid");
        return false;
    }
}

// Fonction pour valider le champ Email

function validateEmail(input) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailUser = inputEmail.value;

    if (emailUser.match(emailRegex)) {
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    }
    else {
        input.classList.add("is-invalid");
        input.classList.remove("is-valid");
        return false;
    }
}

// Fonction pour valider le champ Password

function validatePassword(input) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;
    const passwordUser = inputPassword.value;

    if (passwordUser.match(passwordRegex)) {
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    }
    else {
        input.classList.add("is-invalid");
        input.classList.remove("is-valid");
        return false;
    }
}

// Fonction pour valider le champ Confirmation Password

function validateConfirmPassword(inputPwd, inputConfirmPwd) {
    if (inputPwd.value == inputConfirmPwd.value) {
        inputConfirmPwd.classList.add("is-valid");
        inputConfirmPwd.classList.remove("is-invalid");
        return true;
    }
    else {
        inputConfirmPwd.classList.add("is-invalid");
        inputConfirmPwd.classList.remove("is-valid");
        return false;
    }
}