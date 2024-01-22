import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

export const info = {
    firstName: "Rekha",
    lastName: "Suthar",
    initials: "RS", 
    position: "a Software Developer",
    selfPortrait: self, 
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, 
    baseColor: colors[0],
    miniBio: [ 
        {
            emoji: '🌎',
            text: 'based in the Bangalore/India'
        },
        {
            emoji: "💼",
            text: "3 years of experience(Web Development and Machine Learning) "
        },
        {
            emoji: "📧",
            text: "rekha0suthar@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://github.com/rekha0suthar",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/rekha0suthar/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
    ],
    bio: "Hello! I'm Rekha. I've 3 years of experience in multiple domains (Web Development and Machine Learning). I believe artificial intelligence will inevitably rule us all one day. I am a person who can use AI tools to increase productivity of work. So, You should hire me!",
    skills:
        {
            proficientWith: ['Javascript', 'React', 'Redux', 'Vue', 'TypeScript', 'Bootstrap', 'HTML5', 'CSS3',  'Git', 'Github',],
            exposedTo: ['Nodejs', 'Nextjs', 'Tailwind CSS', 'Python', 'Flask', 'Java', 'Redis', 'Celery', 'SQL', 'AWS']
        }
    ,
    experiences: [
        {
            jobTitle: 'Machine Learning Engineer',
            company: 'Clutterbot',
            duration: 'FEB 2023-NOV 2023'
        },
        {
            jobTitle: 'Frontend Developer',
            company: 'Learngram',
            duration: 'APR 2022-JAN 2023'
        },
        {
            jobTitle: 'Frontend Developer & Intern',
            company: 'Thinkreals',
            duration: 'MARCH 2021-FEB 2022'
        },
    ],
    education: [
        {
            institute: 'Indian Institute of Technology Madras (IITM), Chennai, Tamil Nadu',
            degree: 'Bachelor of Science',
            specialisation: 'Data Science'
        },
    ],
    hobbies: [
        {
            label: 'Reading Book or Mangas',
            emoji: '📖'
        },
        {
            label: 'Anime',
            emoji: '🎥'
        },
    ],
    portfolio: [ 
        {
            title: "Grovery Store Web Application",
            live: "https://drive.google.com/file/d/1ZohEOUIFfpIQE_fatzBn49H30AK9q0IE/view",
            source: "https://github.com/rekha0suthar/grocery-web-application", 
            image: mock1
        },
        {
            title: "E-commerce Web Application",
            live: "https://rekha0suthar.github.io/E-commerce-web-application/",
            source: "https://github.com/rekha0suthar/E-commerce-web-application",
            image: mock2
        },
        {
            title: "Movie Search Application",
            live: "https://rekha0suthar.github.io/Movie_Search/",
            source: "https://github.com/rekha0suthar/Movie_Search",
            image: mock3
        },
    ]
}