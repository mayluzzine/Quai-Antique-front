import Route from "./route.js";

// Définir ici vos routes avec des chemins uniques
export const allRoutes = [
    new Route("/", "Accueil", "/Pages/home.html"),
    new Route("/galerie", "Galerie", "/Pages/galerie.html"),
    new Route("/carte", "Carte", "/Pages/carte.html"),
];

// Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";