import { useState } from "react"
import classes from "./image-modal.module.scss"

interface ImageModalProps {
	src: string
	alt: string
}

export default function ImageToModal({ src, alt }: ImageModalProps) {
	const [isModalOpen, setIsModalOpen] = useState(false)

	function toggleModal(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
		const id = (event.target as HTMLElement).id
		console.log(id)
		if (id === "modal-image") return
		document.body.classList.toggle("no-scroll")
		setIsModalOpen(!isModalOpen)
	}

	return (
		<>
			<div className={classes.image_container} onClick={toggleModal}>
				<img src={src} alt={alt} />
			</div>
			{isModalOpen && (
				<div
					className={`${classes.modal} flex items-center justify-center`}
					onClick={toggleModal}
				>
					<i className="fas fa-times" onClick={toggleModal}></i>
					<div
						className={`${classes.modal_image_container} slide-in-top`}
					>
						<img id="modal-image" src={src} alt={alt} />
					</div>
				</div>
			)}
		</>
	)
}
