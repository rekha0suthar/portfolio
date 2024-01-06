import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"


/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Rekha",
    lastName: "Suthar",
    initials: "RS", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Software Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '🌎',
            text: 'based in the India'
        },
        {
            emoji: "📞",
            text: "+91 9035857733"
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
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I'm Rekha. I've worked as Machine Learning Engineer at Clutterbot for around 1.3 years and before that worked as Frontend Developer at Learngram for around 1 year. In web development, I've around 2 years of experience. I studied Data Science and Applications at Indian Institute od Technology Madras, Chennai. I enjoy reading mangas and watching animes, and I believe artificial intelligence will inevitably rule us all one day. So, people who can use AI to inhence and improve their work will deliver more work and will be more productive. I am a person who can use AI tools to increase productivity of work. So, You should hire me!",
    skills:
        {
            proficientWith: ['javascript', 'react', 'redux', 'vue', 'git', 'github', 'bootstrap', 'html5', 'css3', 'typeScript'],
            exposedTo: ['nodejs', 'python', 'flask', 'java', 'redis', 'celery', 'sql', 'aws']
        }
    ,
    hobbies: [
        {
            label: 'Reading Book or Mangas',
            emoji: '📖'
        },
        {
            label: 'Anime',
            emoji: '🎥'
        },
        
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Grovery Store Web Application",
            source: "https://github.com/rekha0suthar/grocery-web-application", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "E-commerce Web Application",
            source: "https://github.com/rekha0suthar/E-commerce-web-application",
            image: mock2
        },
        {
            title: "Movie Search Application",
            source: "https://github.com/rekha0suthar/Movie_Search",
            image: mock3
        },
    ]
}