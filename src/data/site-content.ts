/**
 * DATOS EDITABLES DEL SITIO
 *
 * Para actualizar la página, editá únicamente los valores y las listas de este
 * archivo. No hace falta modificar el HTML ni el CSS de los componentes.
 *
 * REGLAS PARA EVITAR ERRORES
 * - Conservá los nombres de las propiedades: name, image, href, etc.
 * - Cada elemento va entre llaves { } y los elementos de una lista se separan
 *   con coma. No borres los corchetes [ ] que rodean una lista.
 * - Las rutas de imágenes y videos apuntan a archivos dentro de public y
 *   comienzan con "/". Ejemplo: el archivo public/foto.png se escribe
 *   image: "/foto.png". No escribas "public/" en la ruta.
 * - Para enlaces usá una dirección completa (https://...), mailto: o tel:.
 *   Si todavía no hay dirección, dejá href vacío (""): el elemento se verá,
 *   pero no será un enlace activo hasta que se complete.
 * - Después de editar, guardá el archivo y ejecutá npm run build para revisar
 *   que los datos y las rutas sean válidos.
 * - En desarrollo, Astro actualiza la página al guardar. En el sitio publicado,
 *   los cambios aparecen al volver a generar y desplegar la página.
 *
 * QUÉ EDITAR
 * - homePurchaseLink, viviEntryLink, mundialLink y clamLink:
 *   label es el texto visible; href es el destino. Ejemplo:
 *   { label: "COMPRAR ENTRADAS", href: "https://entradas.example.com" }
 * - homeContacts: cada elemento tiene name (nombre accesible), image (icono
 *   guardado en public) y href (destino). Para correo usá mailto: y para
 *   WhatsApp podés usar https://wa.me/ seguido del número internacional.
 * - speakers: agregar o quitar disertantes y editar todos los datos de cada
 *   tarjeta. name es el nombre y título; nationality es el texto mostrado;
 *   countryCode es el código ISO de dos letras mayúsculas para la bandera;
 *   specialty es la descripción; date y time son textos visibles; city y venue
 *   son la ubicación; image es el retrato en public; socials contiene los
 *   enlaces de WhatsApp, Instagram y Spotify. Dejá vacíos los enlaces que no
 *   existan. Al agregar un disertante, copiá un objeto completo como plantilla.
 * - sponsors: agregar, quitar o actualizar auspiciantes. href es opcional y
 *   puede quedar vacío si el logo no debe enlazar a otro sitio. name es el
 *   texto alternativo y image es la ruta del logo.
 * - videos: agregar o quitar videos. title es el título visible y src es la
 *   ruta del archivo guardado en public. type debe coincidir con el formato:
 *   video/mp4 para .mp4, video/webm para .webm y video/ogg para .ogv/.ogg.
 */

export interface ActionLink {
    label: string;
    href: string;
}

export const homePurchaseLink: ActionLink = {
    label: "COMPRAR ENTRADAS",
    href: "https://www.direcciondelformulario.com",
};

export interface ContactLink {
    name: string;
    image: string;
    href: string;
}

export const homeContacts: ContactLink[] = [
    { name: "Instagram", image: "/instagram.png", href: "https://www.instagram.com" },
    { name: "LinkedIn", image: "/linkedin.png", href: "" },
    { name: "WhatsApp", image: "/whatsapp.png", href: "" },
    { name: "Facebook", image: "/facebook.png", href: "" },
    { name: "Correo electrónico", image: "/mail.png", href: "" },
];

export const speakerSocialNetworks = [
    { key: "whatsapp", name: "WhatsApp", image: "/wapp.png" },
    { key: "instagram", name: "Instagram", image: "/ig.png" },
    { key: "spotify", name: "Spotify", image: "/spotify.png" },
] as const;

export type SpeakerSocialKey = (typeof speakerSocialNetworks)[number]["key"];

export interface Speaker {
    name: string;
    nationality: string;
    countryCode: string;
    specialty: string;
    date: string;
    time: string;
    city: string;
    venue: string;
    image: string;
    socials: Record<SpeakerSocialKey, string>;
}

export const speakers: Speaker[] = [
    {
        name: "Dr. Juan Pérez",
        nationality: "Argentina",
        countryCode: "AR",
        specialty: "Experto en Transformación Digital y Estrategias de Negocios.",
        date: "3 de Noviembre, 2026",
        time: "12 pm",
        city: "Mendoza, Argentina",
        venue: "Espacio Cultural Julio Le Park",
        image: "/disertantes/disertante1.png",
        socials: { whatsapp: "", instagram: "", spotify: "" },
    },
    {
        name: "Dra. Ana García",
        nationality: "Chile",
        countryCode: "CL",
        specialty: "Especialista en Inteligencia Artificial y gestión de empresas.",
        date: "3 de Noviembre, 2026",
        time: "2 pm",
        city: "Mendoza, Argentina",
        venue: "Espacio Cultural Julio Le Park",
        image: "/disertantes/disertante1.png",
        socials: { whatsapp: "", instagram: "", spotify: "" },
    },
    {
        name: "Mg. Carlos Ruiz",
        nationality: "México",
        countryCode: "MX",
        specialty: "Investigador en liderazgo, innovación y desarrollo organizacional.",
        date: "4 de Noviembre, 2026",
        time: "10 am",
        city: "Mendoza, Argentina",
        venue: "Espacio Cultural Julio Le Park",
        image: "/disertantes/disertante1.png",
        socials: { whatsapp: "", instagram: "", spotify: "" },
    },
    {
        name: "Lic. Laura Fernández",
        nationality: "Colombia",
        countryCode: "CO",
        specialty: "Consultora en sustentabilidad y transformación profesional.",
        date: "5 de Noviembre, 2026",
        time: "11 am",
        city: "Mendoza, Argentina",
        venue: "Espacio Cultural Julio Le Park",
        image: "/disertantes/disertante1.png",
        socials: { whatsapp: "", instagram: "", spotify: "" },
    },
    {
        name: "Lic. Rocio",
        nationality: "Italia",
        countryCode: "IT",
        specialty: "Diseñadora",
        date: "5 de Noviembre, 2026",
        time: "11 am",
        city: "Mendoza, Argentina",
        venue: "Espacio Cultural Julio Le Park",
        image: "/disertantes/disertante1.png",
        socials: { whatsapp: "", instagram: "", spotify: "" },
    },
];

export const mundialLink: ActionLink = {
    label: "EL MUNDIAL",
    href: "",
};

export const viviEntryLink: ActionLink = {
    label: "COMPRAR ENTRADAS",
    href: "",
};

export const clamLink: ActionLink = {
    label: "CLAM",
    href: "https://clamargentina.com.ar",
};

export interface Sponsor {
    name: string;
    image: string;
    href: string;
}

export const sponsors: Sponsor[] = [
    { name: "Observatorio", image: "/orbservatorio.png", href: "" },
    { name: "Terra", image: "/terra1.png", href: "" },
    { name: "Terra", image: "/terra2.png", href: "" },
];

export interface FeaturedVideo {
    title: string;
    src: string;
    type: string;
}

export const videos: FeaturedVideo[] = [
    { title: "Video Conamerco", src: "/video1.mp4", type: "video/mp4" },
    { title: "Video 2", src: "/video2.mp4", type: "video/mp4" },
    { title: "Video 3", src: "/video3.mp4", type: "video/mp4" },
    { title: "Video Conamerco 4", src: "/video1.mp4", type: "video/mp4" },
];
