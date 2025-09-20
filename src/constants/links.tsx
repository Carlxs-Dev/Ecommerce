import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa6";

export const navbarLinks = [
    {
        id:1,
        title: "Inicio",
        href: "/"
    },
        {
        id:2,
        title: "Productos",
        href: "/Productos"
    },    
    {
        id:3,
        title: "Sobre Nosotros",
        href: "/Nosotros"
    },
];



export const socialLinks = [
        {
        id:1,
        title: "Instagram",
        href: "https://www.instagram.com/vistalagoexpresspdv/",
        icon: <FaInstagram />,
    },
        {
        id:2,
        title: "TikTok",
        href: "https://www.tiktok.com/@vistalagoexpresspdv",
        icon: <FaTiktok />,
    },    
    {
        id:3,
        title: "Facebook",
        href: "https://www.facebook.com/profile.php?id=100003110611876&locale=es_LA",
        icon: <FaFacebook />,
    },
        {
        id:4,
        title: "Whatsapp",
        href: "https://wa.me/+584127144527",
        icon: <FaWhatsapp />,

    }
];

