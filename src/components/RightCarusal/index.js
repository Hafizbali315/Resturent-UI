import './style.scss'

import ArrowNext from '../../assets/next-icon.svg'
import ArrowPrevious from '../../assets/previous-icon.svg'

import { useRef } from 'react'
import { Link } from 'react-router-dom'

import { CgArrowLongRight } from 'react-icons/cg'

const RightCarusal = ({ ContentArray, title, buttonText }) => {
	const scrollRef = useRef(null)

	const scrollLeft = () => {
		if (scrollRef.current) {
			scrollRef.current.scrollBy({
				top: 0,
				left: -400,
				behavior: 'smooth',
			})
		}
	}

	const scrollRight = () => {
		if (scrollRef.current) {
			scrollRef.current.scrollBy({
				top: 0,
				left: 480,
				behavior: 'smooth',
			})
		}
	}

	return (
		<div className="carusal_right">
			<div className="heading">
				<div className="title">
					<h1>{title}</h1>
				</div>
				<div className="navigation_icon">
					<div className="arrow_previous" onClick={scrollLeft}>
						<img src={ArrowPrevious} alt="ArrowPrevious" />
					</div>
					<div className="arrow_next" onClick={scrollRight}>
						<img src={ArrowNext} alt="ArrowNext" />
					</div>
				</div>
			</div>

			<div className="carusal_container" ref={scrollRef}>
				{ContentArray.map((item) => (
					<div className="carusal_card" key={item.id}>
						<div className="carusal_img">
							<img src={item.img} alt="work" />
						</div>
						<div className="carusal_tag">
							<span>{item.tag}</span>
						</div>

						<div className="carusal_heading">
							<h2>{item.heading}</h2>
						</div>
					</div>
				))}
			</div>

			<button className="carusal_btn">
				<Link to="/dishes" className="link text-decoration-none">
					{buttonText} <CgArrowLongRight className="arrow" />
				</Link>
			</button>
		</div>
	)
}

export default RightCarusal
