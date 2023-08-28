import {
    backend,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    threejs,
    angularNovember2022,
    diplomaForJavascriptWebDeveloper,
    fundamentalsMathematicsFebruary2023,
    htmlCssJanuary2023,
    javascriptAdvancedMay2022,
    javascriptApplicationsJune2022,
    javascriptBackEndSeptember2022,
    programmingBasicsSeptember2021,
    programmingFundamentalsJavascriptJanuary2022,
    qABasicsMarch2023HonorableMention,
    reactJSFebruary2023,
    softwareEngineeringAndDevOpsJune2023,
} from '../assets';

export const navLinks = [
    {
        id: 'about',
        title: 'About',
    },
    {
        id: 'education',
        title: 'Education',
    },
    {
        id: 'contact',
        title: 'Contact',
    },
];

const services = [
    {
        title: 'Web Developer',
        icon: web,
    },
    {
        title: 'React Developer',
        icon: reactjs,
    },
    {
        title: 'Backend Developer',
        icon: backend,
    },

];

const technologies = [
    {
        name: 'HTML 5',
        icon: html,
    },
    {
        name: 'CSS 3',
        icon: css,
    },
    {
        name: 'JavaScript',
        icon: javascript,
    },
    {
        name: 'TypeScript',
        icon: typescript,
    },
    {
        name: 'React JS',
        icon: reactjs,
    },
    {
        name: 'Redux Toolkit',
        icon: redux,
    },
    {
        name: 'Tailwind CSS',
        icon: tailwind,
    },
    {
        name: 'Node JS',
        icon: nodejs,
    },
    {
        name: 'MongoDB',
        icon: mongodb,
    },
    {
        name: 'Three JS',
        icon: threejs,
    },
    {
        name: 'git',
        icon: git,
    },
    {
        name: 'figma',
        icon: figma,
    },
    {
        name: 'docker',
        icon: docker,
    },
];

const experiences = [
    {
        title: 'Javascript Programming Basics',
        company_name: 'Software University',
        icon: programmingBasicsSeptember2021,
        iconBg: '#383E56',
        date: 'September 2021 - December 2021',
        points: [
            'First Steps In Coding.',
            'Conditional Statements.',
            'Conditional Statements Advanced.',
            'For-Loop.',
            'While-Loop.',
            'Nested Loops.',
        ],
    },
    {
        title: 'Programming Fundamentals With Javascript',
        company_name: 'Software University',
        icon: programmingFundamentalsJavascriptJanuary2022,
        iconBg: '#383E56',
        date: 'Januar 2022 - April 2022',
        points: [
            'Basic Syntax, Conditional Statements and Loops.',
            'HTTP Basics.',
            'Data Types and Variables.',
            'HTML & CSS Basics.',
            'Arrays.',
            'Software Development Concepts - Part 1.',
            'Functions.',
            'Software Development Concepts - Part 2.',
            'Arrays Advanced.',
            'Objects and Classes.',
            'Bitwise Operations.',
            'Associative Arrays.',
            'Problem Solving.',
            'Text Processing.',
            'Database Basics.',
            'Regular Expressions.',
            'Git and GitHub.',
        ],
    },
    {
        title: 'Javascript Advanced',
        company_name: 'Software University',
        icon: javascriptAdvancedMay2022,
        iconBg: '#383E56',
        date: 'May 2022 - June 2022',
        points: [
            'Syntax, Functions and Statements.',
            'Arrays and Nested Arrays.',
            'Objects and Composition.',
            'DOM Introduction.',
            'DOM Manipulations and Events.',
            'Advanced Functions.',
            'Unit Testing and Error Handling.',
            'Classes.',
            'Prototypes and Inheritance.',
        ],
    },
    {
        title: 'Javascript Applications',
        company_name: 'Software University',
        icon: javascriptApplicationsJune2022,
        iconBg: '#383E56',
        date: 'June 2022 - July 2022',
        points: [
            'HTTP and REST Services.',
            'Asynchronous Programming.',
            'Remote Data and Authentication.',
            'Single Page Applications.',
            'Architecture and Testing.',
            'Client Side Rendering.',
            'Routing.',
            'Modular Applications.',
        ],
    },
    {
        title: 'Javascript Back-End',
        company_name: 'Software University',
        icon: javascriptBackEndSeptember2022,
        iconBg: '#383E56',
        date: 'September 2022 - November 2022',
        points: [
            'Intro to Node.js.',
            'Node.js Streams and Utilities.',
            'ExpressJS and Templating.',
            'NoSQL and MongoDB.',
            'Session and Authentication.',
            'Validation and Error Handling.',
        ],
    },
    {
        title: 'Angular',
        company_name: 'Software University',
        icon: angularNovember2022,
        iconBg: '#383E56',
        date: 'September 2022 - December 2022',
        points: [
            'Intro to Angular and TypeScript.',
            'Components.',
            'DI, Intro to RxJS, Services.',
            'Modules and Routing.',
            'Forms.',
            'Pipes, Interceptors and Subjects.',
            'State Management.',
        ],
    },
    {
        title: 'HTML & CSS',
        company_name: 'Software University',
        icon: htmlCssJanuary2023,
        iconBg: '#383E56',
        date: 'January 2023 - March 2023',
        points: [
            'Introduction to HTML & CSS.',
            'HTML Structure.',
            'CSS & Typography.',
            'CSS Box Model.',
            'Position & Grid.',
            'Flexbox.',
            'Media Queries.',
        ],
    },
    {
        title: 'React',
        company_name: 'Software University',
        icon: reactJSFebruary2023,
        iconBg: '#383E56',
        date: 'February 2023 - April 2023',
        points: [
            'Intro to React and JSX.',
            'Components: Basic Idea.',
            'Components: Deep Dive.',
            'Forms.',
            'Routing.',
            'React Hooks.',
            'Advanced Techniques.',
        ],
    },
    {
        title: 'Fundamentals in Mathematics',
        company_name: 'Software University',
        icon: fundamentalsMathematicsFebruary2023,
        iconBg: '#383E56',
        date: 'February 2023 - April 2023',
        points: [
            'Basics Mathematics.',
            'Discrete Mathematics - part 1 - Logics.',
            'Discrete Mathematics - part 2 - Graphs.',
            'Probability, statistics and combinatorics.',
            'Basics Algebra.',
        ],
    },
    {
        title: 'QA Basics',
        company_name: 'Software University',
        icon: qABasicsMarch2023HonorableMention,
        iconBg: '#383E56',
        date: 'March 2023 - May 2023',
        points: [
            'Software Quality Assurance Introduction.',
            'Bugs and Bug Tracking.',
            'Test Levels and Test Types.',
            'Workshop: Full Manual Testing.',
        ],
    },
    {
        title: 'Software Engineering and DevOps',
        company_name: 'Software University',
        icon: softwareEngineeringAndDevOpsJune2023,
        iconBg: '#383E56',
        date: 'June 2023 - August 2023',
        points: [
            'Software Engineering Fundamentals.',
            'DevOps Overview.',
            'Source Control Systems, Git and GitHub.',
            'Git Branching and Pull Requests.',
            'Automated Testing.',
            'Continuous Integration, CI / CD Pipelines.',
            'Development Workflow.',
        ],
    },
    {
        title: 'Javascript Web Developer',
        company_name: 'Software University',
        icon: diplomaForJavascriptWebDeveloper,
        iconBg: '#383E56',
        date: '28-August  - 2023',
        points: [
            'I am now a Javascript Full-Stack Web Developer.',
        ],
    },

];


const projects = [

    {
        name: 'Trip Guide',
        description:
            'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
        tags: [
            {
                name: 'nextjs',
                color: 'blue-text-gradient',
            },
            {
                name: 'supabase',
                color: 'green-text-gradient',
            },
            {
                name: 'css',
                color: 'pink-text-gradient',
            },
        ],
        image: diplomaForJavascriptWebDeveloper,
        source_code_link: 'https://github.com/',
    },
];

export { services, technologies, experiences, projects };