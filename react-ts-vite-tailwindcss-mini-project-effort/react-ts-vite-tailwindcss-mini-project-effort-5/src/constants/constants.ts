import {
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
    FaYoutube,
} from 'react-icons/fa';
import { HeaderProps, SocialMediaLink } from "../interface/interface";

export const headerItems: HeaderProps[] = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Service', href: '/service' },
    { label: 'Contact', href: '/contact' },
];

export const socialMediaLinks: SocialMediaLink[] = [
    { label: 'FaFacebookF', href: 'https://www.facebook.com/' },
    { label: 'FaYoutube', href: 'https://www.youtube.com/' },
    { label: 'FaLinkedinIn', href: 'https://www.linkedin.com/' },
    { label: 'FaTwitter', href: 'https://twitter.com/' },
];