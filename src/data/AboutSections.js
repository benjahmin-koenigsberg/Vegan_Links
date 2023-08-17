import me from './me.png'

export const AboutSections = [
    {
        type: "About",
        name: "About this App",
        category: "##",
        author: "",
        description: "This App was created by Benjahmin Koenigsberg inspired by Vegan Hacktivists' The Vegan Cheat Sheet! It is intened to promote veganism through easy access to over 400 seperate vegan related links. Built using React, Font Awesome, Toastify",
        link: "https://www.benjahminkoenigsberg.com",
    },
    {
        type: "About",
        name: "Do you have a link you'd like to share / contribute?",
        description:
            "Email me @ benjahmin.lakin@gmail.com with your link and I'll take a look! Click on the link below to pull up your emailer auto addressed to me",
        category: "",
        link: "mailto:benjahmin.lakin@gmail.com",
    },
    {
        type: "Frequently Asked Questions",
        name: "Who is Benjahmin Koenigsberg",
        description:"I am a vegan activist turned coder in 2023. I am excited to practice while building projects that further veganism. Please reach out to me on LinkedIn or email. Check out my porftolio website by clicking the link below",
        category: (
            <div>
                <img style={{width: '17rem', margin: 'auto'}} src={me}/>
            </div>
                )
        ,
        link: "https://www.benjahminkoenigsberg.com",
    },

]
