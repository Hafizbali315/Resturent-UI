import './style.scss'
import FooterImage from '../../assets/footerImage.jpg'
import { CgArrowLongRight } from 'react-icons/cg'

import FooterLogo from '../../assets/header-logo-white.svg'
import { Link } from 'react-router-dom'

const Footer = () => {
	return (
		<div className="footer">
			<div className="footer_content_row">
				<img src={FooterImage} alt="footerimage" />

				<div className="content">
					<div>
						<h1>Let's Eat</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt eaque adipisci vero cupiditate cumque ducimus sint quae, rem
							maiores facere, voluptatem suscipit alias, distinctio provident! Quia dignissimos blanditiis voluptas harum?
						</p>

						<button>
							Order Food <CgArrowLongRight className="arrow" />
						</button>
					</div>
				</div>
			</div>

			<div className="footer_links_row container-fluid">
				<div className="row">
					<div className="col-lg-3 col-md-4 col-5">
						<Link to="/" className="text-decoration-none">
							<img className="footer_logo" src={FooterLogo} alt="" />
						</Link>
						<p className="privacy_policy">Privacy Policy | Terms of Use</p>
					</div>
					<div className="col-lg-4 col-md-4 col-7">
						<p className="email">Clearbusiness.adrianvenoin@gmail.com</p>
						<p className="map mt-lg-4"> Unit 1, Chancerygate Industrial Cent, Horton Close, West Drayton UB7 8EW. United Kingdom</p>
					</div>
					<div className="col-lg-5 col-md-8 col-12">
						<div className="links_sm_screeen">
							<div className="pages_links">
								<ul>
									<li>
										<Link to="/about-us" className="text-decoration-none link">
											About us
										</Link>
									</li>
									<li>
										<Link to="/dishes" className="text-decoration-none link">
											Dishes
										</Link>
									</li>
									<li>
										<Link to="/menu" className="text-decoration-none link">
											Menu
										</Link>
									</li>

									<li>
										<Link to="/contact-us" className="text-decoration-none link">
											Contact
										</Link>
									</li>
								</ul>
							</div>

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
				</div>
			</div>
		</div>
	)
}

export default Footer
