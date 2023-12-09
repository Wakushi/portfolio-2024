import classes from "./project-card.module.scss"

interface ProjectCardProps {
	img: string
	type: string
	title: string
	gitlink: string
	link: string
	desc: string
}

export default function ProjectCard({
	img,
	type,
	title,
	gitlink,
	link,
	desc
}: ProjectCardProps) {
	function hasLink(): boolean {
		return !!link || !!gitlink
	}

	return (
		<div className={`${classes.project_card} flex flex-col animated-card`}>
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
		</div>
	)
}
