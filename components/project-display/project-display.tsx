import { useState } from "react"
import classes from "./project-display.module.scss"
import ImageToModal from "../ui/image-modal/image-modal"

export default function ProjectDisplay() {
	return (
		<>
			<section
				className={`${classes.project_display} flex flex-col gap-4 `}
			>
				<h2>DEVMentor</h2>
				<p>
					<i className="fa-solid fa-caret-right"></i> A quick overview
					of my last solo project made for Chainlink Hackathon.
				</p>
				<div
					className={`${classes.project_display_info} flex flex-col gap-4 `}
				>
					<div>
						<div className={classes.project_video}>
							<iframe
								width="560"
								height="315"
								src="https://www.youtube.com/embed/Z-BR3U3cnAI"
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
							></iframe>
						</div>
						<ImageToModal
							src="https://blog.chain.link/wp-content/uploads/2023/12/Constellation_Hackathon_Stats_2023-2-2048x1152.png"
							alt="Chainlink Constellation Hackathon statistics"
						/>
					</div>
					<div className="flex flex-col gap-2">
						<p>
							My project{" "}
							<a
								href="https://blog.chain.link/constellation-hackathon-winners/"
								target="_blank"
							>
								won 1st place
							</a>{" "}
							and 10,000$ in the SocialFi Innovations category.
						</p>
						<p>
							DEVMentor is a cutting-edge SocialFi dApp designed
							to help Web3 developers learn by connecting mentors
							with mentees based on specific criteria such as
							language, teaching focus, and engagement duration.
						</p>
						<p>
							DEVMentor provides mentees with the option to either
							choose a random mentor using Chainlink VRF or to
							lock up a minimum amount (denominated in USD using
							Chainlink Price Feeds) to gain access to a specific
							mentor.
						</p>
						<p>
							{" "}
							Chainlink Automation monitors availability to match
							mentees and mentors in real-time as spots become
							available.
						</p>
						<p>
							Mentees and mentors are also rated by their peers
							and rewarded with various perks for outstanding
							behavior, with Chainlink Functions used to send
							emails to confirm external sponsor rewards when a
							user redeems their rewards onchain.
						</p>
					</div>
				</div>
			</section>
		</>
	)
}
