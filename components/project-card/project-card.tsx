import classes from "./project-card.module.scss"
import soloIcon from "@/public/assets/images/icons/solo.webp"
import teamIcon from "@/public/assets/images/icons/team.webp"
import { ProjectContext } from "@/public/data/projects"

interface ProjectCardProps {
	img: string
	type: string
	title: string
	gitlink: string
	link: string
	desc: string
	context: string
	stack: string
}

export default function ProjectCard({
	img,
	type,
	title,
	gitlink,
	link,
	desc,
	context,
	stack
}: ProjectCardProps) {
	function hasLink(): boolean {
		return !!link || !!gitlink
	}

	return (
		<div className={`${classes.project_card} flex flex-col animated-card`}>
			<div
				className={`${classes.project_context_icon} flex items-center gap-2`}
			>
				<img
					src={
						context === ProjectContext.PERSO
							? soloIcon.src
							: teamIcon.src
					}
				></img>
			</div>

			<div className={classes.project_image_container}>
				<img src={img}></img>
			</div>

			<div className={classes.project_info}>
				<h3>{type}</h3>
				<h2>{title}</h2>
			</div>
			<div className={`${classes.project_info_bottom} flex`}>
				{hasLink() && (
					<div className={`${classes.project_icons} flex flex-col`}>
						{!!gitlink && (
							<a className="" target="_blank" href={gitlink}>
								<i className="fa-brands fa-github"></i>
							</a>
						)}
						{!!link && (
							<a className="" target="_blank" href={link}>
								<i className="fa-solid fa-globe"></i>
							</a>
						)}
					</div>
				)}

				<p className={`${classes.project_desc}`}>{desc}</p>
			</div>
			<div className={`${classes.project_stack}`}>
				<p>{stack}</p>
			</div>
		</div>
	)
}
