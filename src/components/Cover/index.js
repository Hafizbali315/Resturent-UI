import './style.scss'
import { CgArrowLongRight } from 'react-icons/cg'

const Cover = () => {
	return (
		<div className="cover_page">
			<div className="content">
				<h1>We provide quality meals and services.</h1>

				<button>
					Order Food <CgArrowLongRight className="arrow" />
				</button>

				<div className="social_links">
					<ul>
						<li>
							<a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
								Instagram
							</a>
						</li>
						<li>
							<a href="https://twitter.com/" target="_blank" rel="noreferrer">
								Twitter
							</a>
						</li>
						<li>
							<a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
								Facebook
							</a>
						</li>
						<li>
							<a href="https://www.medium.com/" target="_blank" rel="noreferrer">
								Medium
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Cover
