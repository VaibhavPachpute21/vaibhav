import slice from '../assets/projects/slice.png';
import SearchImg from '../assets/projects/Search-Image.png';
import UrlShortner from '../assets/projects/URL-Shortner.png';
import Workful from '../assets/projects/workful.jpg';
import Krishi from '../assets/projects/Krishi.png'
import QuickShare from '../assets/projects/quickshare.png'
import EduMitra from '../assets/projects/EduMitra.png'



const myProjects = [
    {
        "title": "EduMitra",
        "description": "EduMitra is online centralized platform for projects undertaken by students from different colleges. ",
        "souce_code": "https://github.com/VaibhavPachpute21/EduMitra",
        "thumbnail":EduMitra,
    },
    {
        "title": "krishi Dashboard",
        "description": "It's a HTML/CSS based platform for farmers to access and manage their agricultural products, orders, and sales.",
        "souce_code": "https://github.com/VaibhavPachpute21/krishi-ecommerce-dashboard",
        "demoLink": "https://krishidashboard.onrender.com/",
        "thumbnail":Krishi,
    },
    {
        "title": "QuickShare",
        "description": "This is a chrome extension made with react. I has weather app it greet us with random quote and you can add your task.",
        "souce_code": "https://github.com/VaibhavPachpute21/QuickShare",
        "demoLink": "https://quickshareweb.onrender.com/",
        "thumbnail":QuickShare,
    },
    {
        "title": "Workful-Chrome extension",
        "description": "This is a chrome extension made with react. I has weather app it greet us with random quote and you can add your task.",
        "souce_code": "https://github.com/VaibhavPachpute21/Workful-One-stop-extension",
        "demoLink": null,
        "thumbnail":Workful,
    },
    {
        "title": "Slice-Pizza delivery web app",
        "description": "It's a Pizza delivery web app built with MERN stack. It contains user and admin panel different payment methods etc.",
        "souce_code": "https://github.com/VaibhavPachpute21/slice",
        "demoLink": 'https://first-client.onrender.com/',
        "thumbnail": slice,
    },
    {
        "title": "URL Shortner",
        "description": "This is react based tool to shorten your URLs. I have used React and shrtcode api for this.",
        "souce_code": "https://github.com/VaibhavPachpute21/URL-Shortner/",
        "demoLink": "https://vaibhavpachpute21.github.io/URL-Shortner/",
        "thumbnail": UrlShortner,
    },
    {
        "title": "Images Finder",
        "description": "This react app can search images for your query with help of Unsplash APIs and ContextApi for state management.",
        "souce_code": "https://github.com/VaibhavPachpute21/SearchImg/",
        "demoLink": "https://vaibhavpachpute21.github.io/SearchImg/",
        "thumbnail": SearchImg,
    }
]



export { myProjects }