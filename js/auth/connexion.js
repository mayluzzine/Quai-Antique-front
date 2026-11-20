// on récupère le mail et le mot de passe 
const mailInput = document.getElementById("EmailInput");
const passwordInput = document.getElementById("PasswordInput");

// on récupère le bouton de connexion
const btnSignin = document.getElementById("btnSignin");
if (btnSignin) {
    btnSignin.addEventListener("click", checkCredentials);
}

// on crée la fonction pour vérifier les credentials
function checkCredentials(event){
    // Empêcher le rechargement par défaut de la page si le bouton est dans un <form>
    if(event) event.preventDefault();
    
    // Données factices (à remplacer par l'appel API)
    if(mailInput.value === "exemple@mail.fr" && passwordInput.value === "123"){
        
        // Jeton factice
        const token = "lkjsdngfljsqdnglkjsdbglkjqskjgkfjgbqslkfdgbskldfgdfgsdgf";
        
        // On stocke le token dans le cookie (setToken fait déjà l'appel à setCookie)
        setToken(token);
        setCookie(roleCookieName, "admin", 7);
        
        // Redirection vers l'accueil
        window.location.replace("/");
    }
    else{
        // En cas d'erreur
        mailInput.classList.add("is-invalid");
        passwordInput.classList.add("is-invalid");
    }
}

// Nettoyage de l'erreur quand l'utilisateur retape dans le champ
mailInput.addEventListener("input", () => mailInput.classList.remove("is-invalid"));
passwordInput.addEventListener("input", () => passwordInput.classList.remove("is-invalid"));
