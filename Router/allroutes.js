import Route from "./route.js";

// Définir ici vos routes avec des chemins uniques
export const allRoutes = [
    new Route("/", "Accueil", "/Pages/home.html"),
    new Route("/galerie", "Galerie", "/Pages/galerie.html"),
    new Route("/carte", "Carte", "/Pages/carte.html"),
    new Route("/connexion", "Connexion", "/Pages/auth/connexion.html"),
    new Route("/inscription", "Inscription", "/Pages/auth/inscription.html"),
    new Route("/compte", "Mon compte", "/Pages/auth/compte.html"),
    new Route("/editPassword", "Modifier le mot de passe", "/Pages/auth/editPassword.html"),
    new Route("/allResa", "Mes réservations", "/Pages/reservations/allResa.html"),
    new Route("/reserver", "Réserver", "/Pages/reservations/reserver.html"),
];

// Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";