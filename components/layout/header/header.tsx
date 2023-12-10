import classes from "./header.module.scss"

interface HeaderProps {
	toggleChatModal?: () => void
}

export default function Header({ toggleChatModal }: HeaderProps) {
	return (
		<header
			className={`${classes.header} flex justify-between slide-in-bottom`}
		>
			<nav className={classes.header_nav}>
				<ul className="flex items-center">
					<li>
						<a href="/">Projects</a>
					</li>
					<li>
						<a href="/blog">Blog</a>
					</li>
					<li>
						<button onClick={toggleChatModal}>Contact</button>
					</li>
				</ul>
			</nav>

			<nav className={`${classes.header_nav} flex items-center`}>
				<ul className="flex items-center">
					<li>
						<a
							target="_blank"
							href="https://www.linkedin.com/in/maxime-eliazord-8718ab259/"
						>
							<i className="fa-brands fa-linkedin"></i>
						</a>
					</li>
					<li>
						<a target="_blank" href="https://github.com/Wakushi">
							<i className="fa-brands fa-github"></i>
						</a>
					</li>
					<li>
						<a
							target="_blank"
							href="https://open.spotify.com/artist/3UpfeEs7V3bmv55WYtJnLf?si=ZgHqX-tnR5aBvcZJ7Qmhew"
						>
							<i className="fa-brands fa-spotify"></i>
						</a>
					</li>
				</ul>
			</nav>
		</header>
	)
}
