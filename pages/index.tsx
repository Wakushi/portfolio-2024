import About from "@/components/about/about"
import Hero from "@/components/hero/hero"
import ProjectCardList from "@/components/project-card-list/project-card-list"

export default function Home() {
	return (
		<div>
			<Hero />
			<ProjectCardList />
			<About />
		</div>
	)
}
