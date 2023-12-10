import { Project, projects } from "@/public/data/projects"
import classes from "./project-card-list.module.scss"
import ProjectCard from "../project-card/project-card"
import { useEffect } from "react"
import soloIcon from "@/public/assets/images/icons/solo.webp"
import teamIcon from "@/public/assets/images/icons/team.webp"

export default function ProjectCardList() {
	useEffect(() => {
		window.addEventListener("scroll", () => {
			const windowYScroll = window.scrollY
			const allCards = document.querySelectorAll(".animated-card")
			allCards.forEach((card) => {
				const htmlCard = card as HTMLElement
				if (htmlCard.offsetTop <= windowYScroll + 500) {
					htmlCard.classList.add("slide-in-top")
				}
			})
		})
	}, [])

	return (
		<div
			className={`${classes.projects_list} flex flex-col items-center justify-center`}
		>
			<div className="flex items-center gap-10 opacity-60">
				<div className="flex items-center gap-2">
					<div
						className={`${classes.context_icon} ${classes.team_icon}`}
					>
						<img src={teamIcon.src}></img>
					</div>
					<p>As a team</p>
				</div>
				<div className="flex items-center gap-2">
					<div
						className={`${classes.context_icon} ${classes.solo_icon}`}
					>
						<img src={soloIcon.src}></img>
					</div>
					<p>Solo project</p>
				</div>
			</div>
			{projects.map((project: Project) => {
				return (
					<ProjectCard
						key={project.id}
						title={project.title}
						type={project.type}
						desc={project.desc}
						img={project.image}
						gitlink={project.gitlink}
						link={project.link}
						context={project.context}
					/>
				)
			})}
		</div>
	)
}
