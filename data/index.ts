export const navItems = [
    { name: "About", 
      link: "#about"
    },
    { name: "Work",
      link: "#work"
    },
    { name: "Contact",
      link: "#contact"
    },
    { name: "Resume",
      link: "#Resume"
    },
]

export const gridItems = [
    {title: 'Title1', description: 'Desc1', id: 1},
    {title: 'Title1', description: 'Desc1', id: 1},
    {title: 'Title1', description: 'Desc1', id: 1},
    {title: 'Title1', description: 'Desc1', id: 1},
]



// Case studies and projects:

// mobile app - UX case study react dx medical device monitor app (User story/)
// mobile app - UX case study phishing game (competitive analysis)
// desktop Saas - UI case study weingart employee dashboard 
// mobile app - data visualization UI and motion design case study confistand 


//Blogs
// e-commerce Fixing St. Vincent's accessibility and ux issues on e commerce site
// How a year of game development taught me to be a better designer
// web accessibility article from the point of view of a web developer

export const projects = [
  {
    id: 1,
    genre: "Medical Device Component",
    category: "Mobile App",
    title: "Redesigning 'React DX Telepatch Cardiac Monitoring App' to accomodate symptom-tracking for patients with hectic schedules",
    des: "Mobile app redesign to accomodate cardiac symptom-tracking for busy lives",
    imgSrc: "/images/project-img/sample-work-thumbnail.png",
    link: "/work/reactdx",
    tags: ["Accessibility", "UX audit", "UI Redesign", "Brand Identity Integration"],
    year: "2024",
    color: "#"
  },
  {
    id: 2,
    genre: "eLearning & Game Design",
    category: "Mobile Game",
    title: "How competitive analysis informed my design choices for 'DIGITAL EXORCIST: A game about phishing attacks'",
    des: "UX screenflow of educational mobile game in development",
    imgSrc: "/images/project-img/sample-work-thumbnail.png",
    link: "/work/digitalexorcist",
    tags: ["Information Architecture", "Competitive Analysis", "UI Research"],
    year: "2024",
    color: "#"
  },
  {
    id: 3,
    genre: "Non Profit",
    category: "Desktop SaaS",
    title: "UI Design of Weingart Center's Employee Portal Dashboard To Manage Veteran Adoption Applications",
    des: "A design for an employee dashboard",
    imgSrc: "/images/project-img/sample-work-thumbnail.png",
    link: "/work/weingartdashboard",
    tags: ["User Research", "UI Design", "Technical Specs"],
    year: "2023",
    color: "#"
  },
  // {
  //   id: 4,
  //   genre: "Startup Medical Device",
  //   category: "Mobile App",
  //   title: "CONFISTAND Health Monitor for Patients with Orthostatic Hypotension: Designing for a startup product",
  //   des: "Health monitoring app for users who can monitor their vitals and recieve notifications if they are at risk of fainting",
  //   img: "/images/work-img-placeholder.png",
  //   link: "/work/confistanapp",
  //   tags: ["UI", "data visualization", "startup team collaboration"],
  //   year: "2023"
  // },
];

export const articles = [
  // {
  //   id: 1,
  //   date: "August 3, 2024",
  //   category: "Informational",
  //   genre: "Music, Art",
  //   title: "Why musicians and artists still benefit from a personal website in 2024",
  //   link:'#',
  //   img: "/images/work-img-placeholder.png",
  // },
  // {
  //   id: 2,
  //   date: "July 28, 2024",
  //   category: "UX Proposal",
  //   genre: "E-Commerce, Music",
  //   title: "Fixing St. Vincent's accessibility and ux issues when buying band merchandise",
  //   link:'#',
  //   img: "/images/work-img-placeholder.png",
  // },
  {
    id: 3,
    date: "January 17, 2024",
    category: "Self Reflection",
    genre: "Design & Project Management",
    title: "How a year of game development taught me to be a better product designer",
    link:'/articles/what-game-dev-taught-me-about-design',
    img: "/images/work-img-placeholder.png",
  },
  {
    id: 4,
    date: "September 22, 2022",
    category: "Web Accessibility, Ethics",
    genre: "Web Accessibility, Ethics",
    title: "Left behind in the digital age: How the lack of web accessibility adds to inequity",
    link:'/articles/web-accessibility-and-inequity',
    img: "/images/work-img-placeholder.png",
  },
]

export const otherProjects = [
  {
    id: 3,
    genre: "Food & Dining",
    category: "React Web App",
    title: "TROJAN DINING",
    des: "A redesigned web app to view all campus dining hall menus at a glance",
    img: "/images/work-img-placeholder.png",
    link: "/",
    tags: ["UI", "Front End Development", "React Hooks"],
    year: "2022"
  },
]

export const writing = [
  {
    title: "Left behind in the digital age: How the lack of web accessibility adds to inequity",
    subtitle: "A discussion about the ethics of web applications in the context of over-engineering solutions",
    date: "September 22, 2022",
    img: "",
    content: [
      "The presence of a single HTML tag determines whether or not a screen reader can describe an image to a visually impaired individual. Although the implementation is simple, this is still commonly overlooked. After all, even a well-maintained homepage for a large educational institution such as USC is missing alt text tags. There was no doubt about the knowledge qualifications of the  engineer hired to manage the website. Yet, the accessibility features were not implemented. Accessibility is like an invisible problem that goes unnoticed by most people except the ones who are affected.  Issues with web accessibility can potentially affect over 40 million Americans who identify with a disability [1]. Additionally, in a low income household, the software necessary to complete coursework might not be accessible through a low-end laptop or mobile device. 27% of low income households only own a phone that they can use to apply to jobs or keep up with school work [2]. This implies that less affluent individuals are more likely to rely on a mobile device or cheaper tablet alternative to carry out necessary tasks despite the fact that not all web applications function properly outside of desktop devices. The concern about accessibility presents itself as an ethical problem that affects people’s ability to have fair opportunities because of disabilities or low-income status.",
      "While there has been rapid improvement in the efficiency of web applications, accessibility is still a feature that is still catching up. It is now almost unavoidable to engage with web applications, but accessibility is still lacking. The ACM Code of Ethics outlines fairness and discrimination prevention in Section 1.4, where it states that we should “avoid creating systems or technologies that disenfranchise or oppress people [3].” The ACM recognizes that technologies that deprive service to certain groups of people are considered discriminatory. Therefore, the lack of accessibility is an ethical issue that affects people with visual impairment and people from low-income households. Unfortunately, heavy modern frameworks that made websites functionally and visually modern can be a cost-cutting method that contributes to accessibility issues. One possible explanation for bloated code could be that it is a cost-effective way to produce applications efficiently. Bloated code is often due to adding a large amount of prewritten code to a project even if the project is only relying on a small portion of prewritten code. Rather than focus on profit and bringing new tech stacks to preexisting web applications, engineers should reinspect code for areas to improve performance to accommodate for excluded groups.",
      "As we continue to modernize web technologies, web accessibility becomes a prominent ethical issue when users are unable to interact with websites due to barriers such as  physical disabilities  and socioeconomic limitations. This can be due to device incompatibility either from the lack of operating system support or the use of web frameworks that negatively impact performance on low-end devices. The other reason can be attributed to overlooking semantic HTML that aids accessibility, such as the alt text tag, because a website functions fine without them. The rapid enthusiasm to continue shipping code that keeps up with the most recent tech trends affects how certain groups are able to access web services. All too often, developers jump to the next big tech stack, including  frameworks, libraries, or languages to develop web applications. While it’s true that we can simplify complex code and maintain scalability of growing applications, it can be a detriment to the average user whose device was developed before the new tech stacks went on the rise. Pursuing new tech stacks poses an ethical issue when developers code without understanding how certain solutions might not be the most optimal solution in terms of increasing accessibility. Consequently, many users are unintentionally deprived of their right to a service because they are limited by their current device capabilities.",
      "I have personally witnessed how the lack of accessibility affects career and learning opportunities. My mother once called me in an emergency to ask me to revise her resume, because her mobile device was unable to format the content correctly. Unfortunately, she was unable to submit her resume on the online job portal due to mobility compatibility issues.  Consequently, she missed a job opportunity with better work accommodations. Her voice turned from stress to disappointment by the time we had passed the midnight deadline. My heart broke at  knowing that her rejection  was not due to lack of professional experience, but rather the inability to apply for the position at all.",
      "Similarly, being unable to have equal access to websites contributes to education inequity. When I tutored students online during the pandemic, several students could not learn as effectively because of unstable internet connection and devices unable to run websites required for schoolwork. In my own education, I experienced times when I was aware of the difference between me and my peers due to accessibility issues. I remember being unable to start a class assignment because my phone could not load the online textbook. I felt awkward and isolated. These instances are identified as a “homework gap” that can continue to follow a child to adulthood [2]. Web accessibility is a problem that spears through people of all stages in life. In addition to impeding learning, it can lead to a feeling of alienation from peers. Until developers use their knowledge to solve this issue, there will continue to be a disparity in opportunities. The dependence of technology in learning shows that the issue of accessibility can be a long-lasting social issue as well.",
      "This issue is more relevant than ever because we are integrating necessary tasks into online applications.  Menu orders, job applications, homework submission, communication with health care providers, and signing digital documents have all become a mundane reality for many able-bodied users. However, there are invisible ramifications when designing online experiences as there is a risk of excluding individuals with disabilities. As more services turn to digitizing their experience, the more important it becomes for programmers to develop solutions that are as efficient and flexible as possible in order to reach the widest audience. As software engineers, we also have the ethical responsibility to consider the impact that we have in people’s online experience.",
      "In turn, it can prove beneficial when users who previously ceased using a service due to underwhelming performance deem the changes significant enough to use the service again. It is worth noting that using modern frameworks is not all bad. Modernizing code often leads to performance improvements which address bugs and lag. With a significant performance improvement, it might be enough to bring back users. Additionally, there are automatic tools that measure a website’s accessibility rating and identify areas of improvement. This might suggest that since there are already laws and regulations in place, accessibility is not a main ethical concern when it comes to code. On the other hand, those metrics are not consistent across the board and ultimately do not give an accurate representation of how often exclusion occurs. I also acknowledge that there are metric tools that analyze performance using heavy dependencies. One such example tool is called “Web Bloat Score Calculator,” which accepts the address of any website and calculates how bloated a website is [4 ]. Bloat is one cause for websites to run slower than normal [5]. However,  such tools cannot give an accurate representation of performance for a low-end device as it is mostly used to display information about average performance. For these reasons, accessibility is still a serious, unregulated issue for low-income individuals.",
      "If we push code changes to improve performance without mindful intention, then any improvements to accessibility are a passive byproduct rather than the result of prioritizing ethical values. We should take a practical approach to address this issue in order to bring engineers aware of the ethical nature of web development and practice upholding the oath to create technologies that promote inclusion rather than alienation. The first change of mindset is to emphasize valuing people over profit. We should invest in learning about factors that cause socioeconomic gaps, such as poverty, minority identity, disabilities, and age,  that bar access to certain technologies. Subsequently,  we should also educate ourselves with accessibility supporting features in our programming languages. It is something we should actively seek out, because it is not always included in training or coursework. It surprised me when I discovered that USC’s ITP 303 Full Stack Web Development course does not cover any semantic HTML content about implementing code for accessibility mode nor color contrast theory for color-blindness. There are many open-source resources, like FreeCodeCamp.org, that have hands-on modules about web accessibility.",
      "The next step is to review and identify areas in the code base that can be revised to broaden device compatibility. The concept of device compatibility is by no means novel. Responsive web design allows for content to adjust to different screen sizes which is an example of accessible design since it allows for better readability and navigation [6]. In the long term, extra commitment towards accessibility-supporting code boosts inclusivity.",
      "Through the midst of rapid advancements, we are constantly surpassing the limitations of what can be accomplished in a browser. Though the common underlying drive is often to gain profit, there is no purpose in developing web applications when the intended audience is not able to use the services. For this reason, software developers should reevaluate whether updating code is a deliberate choice for inclusion or if it is merely to follow the most current tech stacks. Web accessibility is pertinent to all developers, because ethical code can positively impact an individual's well-being by experiencing online services and not feel isolated from others. The direct consequence of being unable to use web apps, which includes career opportunities, academic success, and other privileges, creates a gap between users who can and cannot access a service due to problematic code. In the long term, inaccessibility poses serious issues such as excluding entire minority groups. On that account, I urge us all not to stop developing with the users in mind. We can continue updating code using modern frameworks, but maintain a conscious effort to justify the types of solutions we implement, instead of using the ones that are simply popular due to their novelty."
    ],
    sources: [
      "[1] J.L. Nicholas, “The Web Application Measurement: Non-compliant Accessibility Disparity,” ProQuest, Oct-2020. [Online]. Available: https://www.proquest.com/openview/0dddf16187ab1fd3cb97ed681c46709f/1?pq-origsite=gscholar&cbl=18750&diss=y.[Accessed: 20-Sep-2022]",
      "[2] E. A. Vogels, “Digital divide persists even as Americans with lower incomes make gains in tech adoption,” Pew Research Center, 10-Sep-2021. [Online]. Available: https://www.pewresearch.org/fact-tank/2021/06/22/digital-divide-persists-even-as-americans-with-lower-incomes-make-gains-in-tech-adoption/. [Accessed: 21-Sep-2022].",
      "[3] “The code affirms an obligation of computing professionals to use their skills for the benefit of society.,” ACM Code of Ethics and Professional Conduct. [Online]. Available: https://www.acm.org/code-of-ethics. [Accessed: 19-Sep-2022].",
      "[4] Zel, “Web Bloat Score,” Web Bloat Score Calculator. https://www.webbloatscore.com/(accessed Dec. 2, 2022).",
      "[5] Z.W. Zito, “Why is the Internet so slow? (And how we can fix it).” builtin. https://builtin.com/software-engineering-perspectives/fix-javascript-bloat(accessed Sep 22, 2022).",
      "[6] C. Kearney-Volpe and A. Hurst, “Accessible Web Development: Opportunities to Improve the Education and Practice of Web Development with a Screen Reader,” ACM transactions on accessible computing, vol. 14, no. 2, pp. 1–32, 2021, doi: 10.1145/3458024."
    ]
  },
]
