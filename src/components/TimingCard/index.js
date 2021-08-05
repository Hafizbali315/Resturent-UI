import './style.scss'
import Image1 from '../../assets/1.jpg'
import { Link } from 'react-router-dom'
import { CgArrowLongRight } from 'react-icons/cg'

const TimingCard = () => {
	return (
		<div className="timing_section">
			<img src={Image1} alt="image1" />

			<div className="content">
				<div>
					<h1>Opening Hours</h1>
					<p> 12:30 PM to 12:00 AM (7 days a week)</p>

					<button>
						<Link to="/menu" className="link text-decoration-none">
							Menu <CgArrowLongRight className="arrow" />
						</Link>
					</button>
				</div>
			</div>
		</div>
	)
}

export default TimingCard
