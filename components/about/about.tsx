import classes from "./about.module.scss"

export default function About() {
	return (
		<section className={`${classes.profile_section} flex flex-col p-5`}>
			<div className={`${classes.profile_part} `}>
				<div
					className={`${classes.profile_description} flex flex-col gap-20`}
				>
					<div className="flex flex-col flex-1">
						<h2 className="flex items-center justify-between">
							Stack <i className="fa-solid fa-toolbox"></i>
						</h2>
						<div className="flex justify-between">
							<ul className="flex flex-col gap-5">
								<li>
									<i className="fa-solid fa-caret-right"></i>{" "}
									TypeScript
								</li>
								<li>
									<i className="fa-solid fa-caret-right"></i>{" "}
									React
								</li>
								<li>
									<i className="fa-solid fa-caret-right"></i>{" "}
									Angular
								</li>
								<li>
									<i className="fa-solid fa-caret-right"></i>{" "}
									AWS
								</li>
							</ul>
							<ul className="flex flex-col gap-5">
								<li>
									<i className="fa-solid fa-caret-right"></i>{" "}
									NextJS
								</li>
								<li>
									<i className="fa-solid fa-caret-right"></i>{" "}
									NestJS
								</li>
								<li>
									<i className="fa-solid fa-caret-right"></i>{" "}
									MongoDB
								</li>
								<li>
									<i className="fa-solid fa-caret-right"></i>{" "}
									Solidity
								</li>
							</ul>
							<ul className="flex flex-col gap-5">
								<li>
									<i className="fa-solid fa-caret-right"></i>{" "}
									Foundry
								</li>
								<li>
									<i className="fa-solid fa-caret-right"></i>{" "}
									Hardhat
								</li>
								<li>
									<i className="fa-solid fa-caret-right"></i>{" "}
									Ethers.js
								</li>
								<li>
									<i className="fa-solid fa-caret-right"></i>{" "}
									Chainlink
								</li>
							</ul>
						</div>
					</div>
					<div className="flex flex-col flex-1">
						<h2 className="flex items-center justify-between">
							About me{" "}
							<i className="fa-solid fa-address-card"></i>
						</h2>
						<p>
							Hello, my name is Maxime, I'm a french web developer
							based in Paris. I'm also a blockchain enthusiast and
							a web3 security researcher.
						</p>
						<p>
							I'm currently employed as a junior web developer,
							creating tailor-made web applications to help our
							clients boost their productivity and profitabily.{" "}
						</p>
						<p>
							When I'm not working, I enjoy building side
							projects, making music, performing in musicals and
							scuba diving.
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}
