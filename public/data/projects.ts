export interface Project {
	id: string
	context: string
	image: string
	desc: string
	type: string
	stack: string
	title: string
	gitlink: string
	link: string
}

export enum ProjectContext {
	PRO = "pro",
	PERSO = "perso"
}

export const projects: Project[] = [
	{
		id: "1",
		context: "perso",
		image: "https://i.imgur.com/CU8dVgY.png",
		desc: "DEVMentor is a non-profit social-fi dApp where students and mentors can connect to share their knowledge about web3, smart contracts, security and all EVM related subjects, while getting rewarded.",
		type: "Web3 dApp for developers",
		stack: "Solidity / Foundry / NextJS / NestJS / IPFS",
		title: "DEVMentor",
		gitlink: "https://github.com/Wakushi/devmentor",
		link: "https://devmentor-app.vercel.app/"
	},
	{
		id: "13",
		context: "pro",
		image: "https://i.imgur.com/JTQyV1T.png",
		desc: "A platform that allows users to invest in various work of art, manage their shares and wallet. I've worked as a team member on the front-end of this application.",
		type: "Web application for investors",
		stack: "Angular / NestJS / Stripe / AWS",
		title: "Art crowdfunding",
		gitlink: "",
		link: ""
	},
	{
		id: "2",
		context: "pro",
		image: "https://i.imgur.com/FRqKsAw.png",
		desc: "The platform facilitates online booking and payment for both teleconsultations and physical appointments with doctors, available through a convenient mobile application for iOS and Android users. ",
		type: "Web application for doctors",
		stack: "Angular / NestJS / AWS / Elastic Search / Stripe",
		title: "Medical platform",
		gitlink: "",
		link: ""
	},
	{
		id: "3",
		context: "pro",
		image: "https://i.imgur.com/C5yViFz.png",
		desc: "The platform serves as a comprehensive administration interface that uses algorithms to match client files with housing based on specific criteria, and provides administrators with tools to manage file statuses.",
		type: "Web application for HRs",
		stack: "Angular / NodeJS / NestJS / AWS / SQS / SES ",
		title: "Housing platform",
		gitlink: "",
		link: ""
	},
	{
		id: "4",
		context: "pro",
		image: "https://i.imgur.com/f55n1ZU.png",
		desc: "This app helps drivers to manage their rides, their clients, invoices and even share their rides with their partners so they can focus more on providing excellent service to their passengers. I've worked as a team member on front-end of this application.",
		type: "Android/iOS application",
		stack: "Ionic / PHP / SQL",
		title: "Driver mobile app",
		gitlink: "",
		link: ""
	},
	{
		id: "5",
		context: "pro",
		image: "https://i.imgur.com/NfTJMLg.png",
		desc: "This application allows companies to provide news and informations for journalists and media. I've worked as a team member on both front-end and back-end of this application.",
		type: "Web service ",
		stack: "Angular / NestJS / AWS / MongoDB ",
		title: "News sharing service",
		gitlink: "",
		link: ""
	},
	{
		id: "6",
		context: "perso",
		image: "https://i.imgur.com/RCUtj67.png",
		desc: "MultiSig Factory is a web app that allows anyone to create and manage a MultiSig wallet. Users can easily create, confirm and execute transactions from their multi-signature wallet. (Sepolia testnet only)",
		type: "dApp",
		stack: "NextJS / Foundry / Ethers.js / Alchemy",
		title: "Multi-sig Factory",
		gitlink: "https://github.com/Wakushi/multisig-wallet-factory",
		link: "https://multisig-wallet-factory.vercel.app/"
	},
	{
		id: "7",
		context: "perso",
		image: "https://i.imgur.com/xJzwE83.png",
		desc: "An algorithmic dollar pegged Stablecoin smart contract made using Foundry. This contract allows anyone to mint stablecoins by depositing ETH, and burn stablecoins to withdraw ETH.",
		type: "Smart Contract",
		stack: "Solidity / Foundry / Chainlink",
		title: "Stablecoin",
		gitlink: "https://github.com/Wakushi/foundry-defi-stablecoin",
		link: ""
	},
	{
		id: "8",
		context: "perso",
		image: "https://i.imgur.com/MYgZGmU.png",
		desc: "Paths is a Reigns-like game. You're a time and space traveler, captain of your own ship. All of your decisions will impact the fate of your crew and your journey through the universe.",
		type: "Mobile Game",
		stack: "Angular / Ionic",
		title: "Paths",
		gitlink: "https://github.com/Wakushi/paths",
		link: "https://paths-one.vercel.app/"
	},
	{
		id: "10",
		context: "perso",
		image: "https://i.imgur.com/iElYslB.png",
		desc: "Helix Vault is a web app that allows anyone to get information about any Helix holder's staked items, without the need for wallet connection.",
		type: "Web3 App",
		stack: "React / Typescript / Vite",
		title: "Helix Vault",
		gitlink: "https://github.com/Wakushi/helix-vaults",
		link: "https://helix-vaults.vercel.app/"
	}
]
