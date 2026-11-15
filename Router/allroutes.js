import Route from "./route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/Pages/home.html"),
    new Route("/", "Galerie", "/Pages/galerie.html"),
];


//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";