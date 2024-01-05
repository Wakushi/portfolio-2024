import About from "@/components/about/about"
import Hero from "@/components/hero/hero"
import ProjectCardList from "@/components/project-card-list/project-card-list"
import ProjectDisplay from "@/components/project-display/project-display"
import ShaderGradientBackground from "@/components/ui/shader-gradient/shader-gradient"

export default function Home() {
	return (
		<div className="relative">
			<Hero />
			<ProjectDisplay />
			<About />
			<ProjectCardList />
			<ShaderGradientBackground />
		</div>
	)
}
