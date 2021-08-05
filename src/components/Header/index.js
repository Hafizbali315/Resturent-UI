import { useEffect, useState } from 'react'
import './style.scss'
import { Link, useLocation } from 'react-router-dom'

// import HeaderLogoWhite from '../../assets/header-logo-white.svg'
// import HeaderLogoBlack from '../../assets/header-logo-black.svg'
import Cancel from '../../assets/cancel.svg'

import { GiHamburgerMenu } from 'react-icons/gi'
import { CgArrowLongRight } from 'react-icons/cg'

const Header = () => {
	const { pathname } = useLocation()

	const [showSmallScreenMenu, setShowSmallScreenMenu] = useState(false)

	const [headerColor, setHeaderColor] = useState('black')

	useEffect(() => {
		if (pathname === '/') {
			setHeaderColor('white')
		} else {
			setHeaderColor('black')
		}
	}, [pathname])

	useEffect(() => {
		if (showSmallScreenMenu) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'auto'
		}
	}, [showSmallScreenMenu])

	return (
		<div className="header">
			<div className="header_logo">
				<Link to="/" className="text-decoration-none">
					<h2 style={{ color: headerColor === 'white' ? 'white' : 'black' }}>24 Hours Italian Restaurant</h2>
				</Link>
			</div>

			<div className="header_links d-none d-lg-flex ">
				<ul>
					<li>
						<Link className={`${headerColor === 'white' ? 'navlinksWhite' : 'navlinksBlack'} text-decoration-none `} to="/timing">
							Timing
						</Link>
					</li>

					<li>
						<Link className={`${headerColor === 'white' ? 'navlinksWhite' : 'navlinksBlack'} text-decoration-none `} to="/about-us">
							About us
						</Link>
					</li>
					<li>
						<Link className={`${headerColor === 'white' ? 'navlinksWhite' : 'navlinksBlack'} text-decoration-none `} to="/contact-us">
							Contact Us
						</Link>
					</li>

					<li>
						<Link className={`${headerColor === 'white' ? 'navlinksWhite' : 'navlinksBlack'} text-decoration-none `} to="/menu">
							Menu & Pricing
						</Link>
					</li>
				</ul>
			</div>

			<div
				className={`${headerColor === 'white' ? 'hamburger_white' : 'hamburger_black'} hamburger_menu d-lg-none`}
				onClick={() => setShowSmallScreenMenu(true)}
			>
				<GiHamburgerMenu />
			</div>

			{showSmallScreenMenu && (
				<div className="mobile_menu">
					<div className="mobile_menu_header">
						<div className="header_logo">
							<Link to="/" className="text-decoration-none">
								<h2 style={{ color: 'white' }}>24 Hours Italian Restaurant</h2>
							</Link>
						</div>

						<div className="cancel" onClick={() => setShowSmallScreenMenu(false)}>
							<img src={Cancel} alt="cancel" />
						</div>
					</div>

					<div className="mobile_menu_links">
						<ul>
							<li>
								<Link className="text-white text-decoration-none" to="/timing">
									Timing
								</Link>
							</li>
							<li>
								<Link className="text-white text-decoration-none" to="/about-us">
									About us
								</Link>
							</li>

							<li>
								<Link className="text-white text-decoration-none" to="/contact-us">
									Contact Us
								</Link>
							</li>

							<li>
								<Link className="text-white text-decoration-none" to="/menu">
									Menu & Pricing
								</Link>
							</li>

							<li>
								<button>
									Order Food <CgArrowLongRight className="arrow" />
								</button>
							</li>
						</ul>
					</div>
				</div>
			)}
		</div>
	)
}

export default Header
