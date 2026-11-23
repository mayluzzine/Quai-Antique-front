
// On récupère les éléments de connexion 

const mailInput = document.getElementById("EmailInput");
const passwordInput = document.getElementById("PasswordInput");
const btnSignin = document.getElementById("btnSignin");

if (btnSignin) {
    btnSignin.addEventListener("click", checkCredentials);
}

function checkCredentials() {
    if (!mailInput || !passwordInput) return;

    // Ici, il faudra appeler l'API pour vérifier les credentials en BDD
    if (mailInput.value === "exemple@mail.fr" && passwordInput.value === "123") {
        // Il faudra récupérer le vrai token
        const token = "lkjsdngfljsqdnglkjsdbglkjqskjgkfjgbqslkfdgbskldfgdfgsdgf";
        setToken(token);

        // Vérifie que la constante s'appelle bien RoleCookieName (ou roleCookieName) dans scripts.js
        setCookie(RoleCookieName, "admin", 7);
        window.location.replace("/");
    } else {
        mailInput.classList.add("is-invalid");
        passwordInput.classList.add("is-invalid");
    }
}

// Nettoyage de l'erreur quand l'utilisateur retape dans le champ
if (mailInput) {
    mailInput.addEventListener("input", () => mailInput.classList.remove("is-invalid"));
}
if (passwordInput) {
    passwordInput.addEventListener("input", () => passwordInput.classList.remove("is-invalid"));
}