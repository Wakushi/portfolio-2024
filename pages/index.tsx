import About from "@/components/about/about"
import Hero from "@/components/hero/hero"
import ProjectCardList from "@/components/project-card-list/project-card-list"
import ProjectDisplay from "@/components/project-display/project-display"

export default function Home() {
	return (
		<div>
			<Hero />
			<ProjectDisplay />
			<About />
			<ProjectCardList />
		</div>
	)
}
