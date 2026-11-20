import Route from "./route.js";

// Définir ici vos routes avec des chemins uniques
export const allRoutes = [
    new Route("/", "Accueil", "/Pages/home.html", []),
    new Route("/galerie", "Galerie", "/Pages/galerie.html", [], "/js/galerie.js"),
    new Route("/carte", "Carte", "/Pages/carte.html", []),
    new Route("/connexion", "Connexion", "/Pages/auth/connexion.html", ["disconnected"], "/js/auth/connexion.js"),
    new Route("/inscription", "Inscription", "/Pages/auth/inscription.html", [], "/js/auth/inscription.js"),
    new Route("/compte", "Mon compte", "/Pages/auth/compte.html", ["client", "admin"]),
    new Route("/editPassword", "Modifier le mot de passe", "/Pages/auth/editPassword.html", ["client", "admin"]),
    new Route("/allResa", "Mes réservations", "/Pages/reservations/allResa.html", ["client"]),
    new Route("/reserver", "Réserver", "/Pages/reservations/reserver.html", ["client"]),
];

// Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";