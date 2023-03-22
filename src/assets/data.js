import slice from '../assets/projects/slice.png';
import SearchImg from '../assets/projects/Search-Image.png';
import UrlShortner from '../assets/projects/URL-Shortner.png';
import Workful from '../assets/projects/workful.jpg';



const myProjects = [
    {
        "title": "Workful-Chrome extension",
        "description": "This is a chrome extension made with react. I has weather app it greet us with random quote and you can add your task.",
        "souce_code": "https://github.com/VaibhavPachpute21/Workful-One-stop-extension",
        "demoLink": null,
        "thumbnail":Workful,
    },
    {
        "title": "Slice-Pizza delivery web app",
        "description": "This is Pizza delivery web app built with MERN stack. It contains user and admin panel, and stripe payment method also integrated.",
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
        "description": "This react app can search images for your query. Here in this react app I have made use of APIs from Unsplash.com and ContextApi for state management.",
        "souce_code": "https://github.com/VaibhavPachpute21/SearchImg/",
        "demoLink": "https://vaibhavpachpute21.github.io/SearchImg/",
        "thumbnail": SearchImg,
    }
]



export { myProjects }