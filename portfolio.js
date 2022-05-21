import emoji from "react-easy-emoji";

export const greetings = {
	name: "Avhadeev Alex",
	title: "This is Avhadeev Alex",
	description:
		"I'm passionate Full Stack blockchain engineer having an experience of web applications with Python, Django, React.js, Next.js and Blockchain development on Ethereum, Solidity, Web3.js, Moralis, and Brownie Framework.",
	resumeLink:
		"https://cvdesignr.com/p/62662c12a274f?hl=en_GB",
};

export const openSource = {
	githubUserName: "superstar323",
};

export const contact = {};

export const socialLinks = {
	mail: "mailto:avhadeevalex@gmail.com",
	discord: "https://discord.gg/MjK9DJE5",
	github: "https://github.com/SuperStar323",
	telegram: "https://t.me/superstar323",
	// linkedin: "https://www.linkedin.com/in/vecnazmaga/",
};

export const skillsSection = {
	title: "What I do",
	subTitle:
		"CRAZY FULL STACK BLOCKCHAIN ENGINEER WHO WANTS TO EXPLORE EVERY TECH STACK",
	data: [
		{
			title: "Blockchain",
			lottieAnimationFile: "/lottie/skills/ethereum.json", // Path of Lottie Animation JSON File
			skills: [
				emoji(
					"⚡ Experience in developing Smart Contract using Solidity & Ethereum"
				),
				emoji(
					"⚡ Building Scripts for automated testing & deployment of Smart Contracts using Brownie & Infura"
				),
				emoji(
					"⚡ Experience of using Openzeppelin Smart Contract Standards & Chainlink Oracles"
				),
				emoji(
					"⚡ Developing NFT Smart Contracts using ERC-721 Token Standard"
				),
				emoji(
					"⚡ Building Dapps with React.js & Solidity using Web3.js, Moralis & IPFS"
				),
			],
			softwareSkills: [
				{
					skillName: "Ethereum",
					fontAwesomeClassname: "logos:ethereum",
				},
				{
					skillName: "Solidity",
					fontAwesomeClassname: "logos:solidity",
				},
				{
					skillName: "Web3js",
					fontAwesomeClassname: "logos:web3js",
				},
				{
					skillName: "Metamask",
					fontAwesomeClassname: "logos:metamask-icon",
				},
				{
					skillName: "Ganache",
					fontAwesomeClassname: "logos:ganache-icon",
				},
			],
		},
		{
			title: "Full Stack Development",
			lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
			skills: [
				emoji(
					"⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js"
				),
				emoji("⚡ Building responsive static websites using Next.js"),
				emoji(
					"⚡ Building RESTful APIs in Djnago & Django REST Framework"
				),
			],
			softwareSkills: [
				{
					skillName: "HTML-5",
					fontAwesomeClassname: "vscode-icons:file-type-html",
				},
				{
					skillName: "CSS-3",
					fontAwesomeClassname: "vscode-icons:file-type-css",
				},
				{
					skillName: "JavaScript",
					fontAwesomeClassname: "logos:javascript",
				},
				{
					skillName: "Reactjs",
					fontAwesomeClassname: "vscode-icons:file-type-reactjs",
				},
				{
					skillName: "Nextjs",
					fontAwesomeClassname: "vscode-icons:file-type-light-next",
				},
				{
					skillName: "Python",
					fontAwesomeClassname: "logos:python",
				},
				{
					skillName: "Django",
					fontAwesomeClassname: "vscode-icons:file-type-django",
				},

				{
					skillName: "Redux",
					fontAwesomeClassname: "logos:redux",
				},
				{
					skillName: "NPM",
					fontAwesomeClassname: "logos:npm-icon",
				},
				{
					skillName: "Yarn",
					fontAwesomeClassname: "logos:yarn",
				},
			],
		},
		{
			title: "Cloud Infra-Architecture",
			lottieAnimationFile: "/lottie/skills/cloudinfra.json", // Path of Lottie Animation JSON File
			skills: [
				emoji("⚡ Experience of working on multiple cloud platforms"),
				emoji(
					"⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases"
				),
				emoji(
					"⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions"
				),
			],
			softwareSkills: [
				{
					skillName: "AWS",
					fontAwesomeClassname: "logos:aws",
				},
				{
					skillName: "Azure",
					fontAwesomeClassname: "logos:microsoft-azure",
				},
				{
					skillName: "Heroku",
					fontAwesomeClassname: "logos:heroku-icon",
				},
				{
					skillName: "PostgreSQL",
					fontAwesomeClassname: "logos:postgresql",
				},
				{
					skillName: "Github",
					fontAwesomeClassname: "akar-icons:github-fill",
				},
				{
					skillName: "Docker",
					fontAwesomeClassname: "logos:docker-icon",
				},
				{
					skillName: "Github Actions",
					fontAwesomeClassname: "logos:github-actions",
				},
				{
					skillName: "Cloudinary",
					fontAwesomeClassname: "logos:cloudinary",
				},
				{
					skillName: "Nginx",
					fontAwesomeClassname: "logos:nginx",
				},
				{
					skillName: "Sentry",
					fontAwesomeClassname: "logos:sentry-icon",
				},
			],
		},
	],
};

export const SkillBars = [
	{
		Stack: "Frontend/Design", //Insert stack or technology you have experience in
		progressPercentage: "90", //Insert relative proficiency in percentage
	},
	{
		Stack: "Backend",
		progressPercentage: "70",
	},
	{
		Stack: "Programming",
		progressPercentage: "60",
	},
];

export const educationInfo = [
	{
		schoolName: "The UNIVERSITY of SPLIT",
		subHeader: "Master's Degree Information Technology",
		duration: "September 2008 - March 2010",
		desc: "Excellence is not a skill. It is an attitude.",
		descBullets: [
			"Always be a first-rate version of yourself, instead of a second-rate version of somebody else.",
		],
	},
	{
		schoolName: "The UNIVERSITY OF ZAGREB",
		subHeader: "Bachelor Information Technology",
		duration: "September 2006 - March 2008",
		desc: "Even the greatest were beginners.",
		descBullets: [
			"Everything’s always ending. But everything’s always beginning, too.",
			"Don’t cry because it’s over. Smile because it happened.",
		],
	},
];

export const experience = [
	{
		role: "Blockchain Engineer",
		company: "Crosswise Finance",
		companylogo: "/img/icons/common/crosswise.png",
		date: "Jan 2022 – Mar 2022",
		desc: "I worked as Blockchain Engineer on a CrosswiseFinance several projects. Crosswise Finance aims to combine CeFi and DeFi, enhance interoperability, and drive mass adoption.",
	},
	{
		role: "API Engineer",
		company: "Duseca Software",
		companylogo: "/img/icons/common/dusecaSoftware.jpg",
		date: "Jan 2021 – Oct 2021",
		desc: "I worked as API Engineer on a Kale App. Kale is a community platform for the creation of social reviews based on verified transactions. I built Fully Optimized and High Performance RESTful APIs using Django, DjangoRESTFramework, PostgresSQL, JWT Authentication, AWS, Integrated Plaid APIs for Fetching Bank Transactions, Integrated Sentry for monitoring Django Server and deployed the API on Heroku Server.",
	},
	{
		role: "Full Stack Developer",
		company: "Bleed-AI",
		companylogo: "/img/icons/common/bleedAI.jpg",
		date: "Sept 2020 - Oct 2020",
		desc: "Worked as django web developer to create a website in which I integrated computer vision AI model (built by the team of BleedAI) to process YouTube URLs and show Real Time processing on Website using Django Channels WebSockets , threading for running multiple instances of AI Model, jQuery for UI rendering and deployed it on Heroku server.",
	},
	{
		role: "Backend Developer",
		company: "Wapidu",
		companylogo: "/img/icons/common/wapidu.jpg",
		date: "Sept 2020",
		desc: "Worked as a Django Developer to integrate Stripe payment gateway in wapidu.com and Created REST APIs using Django REST Framework to integrate Django Stripe backend to Vue.js Frontend and Deployed it on Azure based Docker container registry.",
	},
];

export const projects = [
	{
		name: "2omb / 3omb",
		desc: "An algorithmic stablecoin on the Fantom Opera blockchain, pegged to the price of 1 FTM.",
		link: "https://3omb.finance/",
	},
	{
		name: "AtlasMart",
		desc: "With Atlas Mart, it’s easy to find the products with the best price and ship them straight to your door.",
		link: "https://atlasmart.netlify.app/",
	},
	{
		name: "Technota (Forum)",
		desc: "Get hands-on experience in technical skills with Technota",
		link: "https://technota.netlify.app/",
	},
	{
		name: "Shopaza (Ecommerce)",
		desc: "Now your reach to all your favorite entertainment and luxury items is just one touch apart",
		link: "https://shopaza.herokuapp.com/",
	},
	{
		name: "MMFmelody (Blog)",
		desc: "Here you will find amazing tips about health, beauty, and modern-day life.",
		link: "https://mmfmelody.herokuapp.com/",
	},
];

export const feedbacks = [
	{
		name: "Jesper",
		feedback:
			"I would highly recommend Alex and his team for a great job and it has been a real pleasure working with them. They respond quickly at all times of the day. Here you won't have to wait several weeks for a response. Can highly recommend this group if you want quality. And it's rare I give reviews only when I really mean it.",
	},
	{
		name: "Benjamin",
		feedback:
			"I thought this did such an incredible job. I've worked with other developers in the past and this was by far the best developer to get the job done. He always responded everyday with questions and comments to answer when I had them. And the product was incredible. I would highly recommend, and plan to work with him from now on in the future. ",
	},
	{
		name: "Sibeso",
		feedback:
			"Alex was Heaven sent. This is the first time I was working with him. Exceptional customer service! I wouldn't have requested for a better Developer than him. His communication was excellent. He always updated me with my project and is creative. He really knows his codes. I know my blockchain game will be a success because of the creative he put into it. His graphics are good and he identified innovative approaches . Definitely working with him again! Blessings to you Alex!",
	},
];
