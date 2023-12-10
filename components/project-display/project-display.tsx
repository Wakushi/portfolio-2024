import classes from "./project-display.module.scss"

export default function ProjectDisplay() {
	return (
		<section className={`${classes.project_display} flex flex-col gap-4 `}>
			<h2>DEVMentor</h2>
			<p>
				<i className="fa-solid fa-caret-right"></i> A quick overview of
				my last solo project made for Chainlink Hackathon.
			</p>
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
		</section>
	)
}
