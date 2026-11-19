//Implémenter le JS de ma page

// on déclare les champs à vérifier 

const inputNom = document.getElementById("NomInput");
const inputPreNom = document.getElementById("PrenomInput");
const inputMail = document.getElementById("EmailInput");
const inputPassword = document.getElementById("PasswordInput");
const inputValidationPassword = document.getElementById("ValidatePasswordInput");
const btnValidateInscription = document.getElementById("btn-validate-inscription");

// On ajouter l'event listener sur les champs à vérifier 

inputNom.addEventListener("keyup", validateForm); 
inputPreNom.addEventListener("keyup", validateForm);
inputMail.addEventListener("keyup", validateForm);
inputPassword.addEventListener("keyup", validateForm);
inputValidationPassword.addEventListener("keyup", validateForm);

//Fonction pour valider tout le formulaire

function validateForm(){
    const nomOk = validateRequired(inputNom);
    const prenomOk = validateRequired(inputPreNom);
    const mailOk = validateMail(inputMail);
    const passwordOk = validatePassword(inputPassword);
    const validationPasswordOk = passwordOk && validatePasswordMatch();

// Empêcher de cliquer sur le bouton valider si le formulaire n'est pas valide

if(nomOk && prenomOk && mailOk && passwordOk && validationPasswordOk) {
    btnValidateInscription.disabled = false;
}
else {
    btnValidateInscription.disabled = true;
}
}

// Fonction pour vérifier l'email 

function validateMail(input){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // définition d'une regex mail valide
    
    const mailUser = input.value; // on récupère la valeur du champ mail

    if(mailUser.match(emailRegex)){ // on vérifie si le mail correspond à la regex
        input.classList.add("is-valid"); // on ajoute la classe is-valid
        input.classList.remove("is-invalid"); // on enlève la classe is-invalid
        return true; // c'est ok 
    }
    
    else{
        input.classList.remove("is-valid"); // on enlève la classe is-valid
        input.classList.add("is-invalid"); // on ajoute la classe is-invalid
        return false; // c'est pas ok
    }
}

// Fonction pour vérifier le mot de passe

function validatePassword(input){
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; // définition d'une regex pour un mot de passe valide
    
    const passwordUser = input.value; // on récupère la valeur du champ mot de passe

    if(passwordUser.match(passwordRegex)){
        input.classList.add("is-valid"); // on ajoute la classe is-valid
        input.classList.remove("is-invalid"); // on enlève la classe is-invalid
        return true; // c'est ok
    }
    else{
        input.classList.remove("is-valid"); // on enlève la classe is-valid
        input.classList.add("is-invalid"); // on ajoute la classe is-invalid
        return false; // c'est pas ok
    }
}

// Fonction pour vérifier que les mots de passe correspondent

function validatePasswordMatch(){
    if(inputPassword.value === inputValidationPassword.value && inputPassword.value !== ''){
        inputValidationPassword.classList.add("is-valid"); // on ajoute la classe is-valid
        inputValidationPassword.classList.remove("is-invalid"); // on enlève la classe is-invalid
        return true; // c'est ok
    }
    else{
        inputValidationPassword.classList.remove("is-valid"); // on enlève la classe is-valid
        inputValidationPassword.classList.add("is-invalid"); // on ajoute la classe is-invalid
        return false; // c'est pas ok
    }
}

// Fonction pour vérifier que les champs requis (Nom et Prénom) sont remplis

function validateRequired(input){
    if(input.value != ''){                  // c'est ok
        input.classList.add("is-valid"); // on ajoute la classe is-valid
        input.classList.remove("is-invalid"); // on enlève la classe is-invalid
        return true;
    }
    else{                                   // c'est pas ok, on fait l'inverse
        input.classList.remove("is-valid"); // on enlève la classe is-valid
        input.classList.add("is-invalid"); // on ajoute la classe is-invalid
        return false;
    }
}