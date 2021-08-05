import Image2 from '../../assets/Image2.jfif'

import './style.scss'

const ContactImageCard = () => {
	return (
		<div className="contact_image_card">
			<img src={Image2} alt="image1" />

			<div className="content">
				<div>
					<h1>We are available 24/7</h1>
				</div>
			</div>
		</div>
	)
}

export default ContactImageCard
