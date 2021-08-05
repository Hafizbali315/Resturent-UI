import AboutUsTagCard from '../../components/AboutUsTagCard'
import './style.scss'
import AboutResturent from './../../components/AboutResturent/index'
import RightCarusal from './../../components/RightCarusal/index'

import Chef1 from '../../assets/chefs/chef1.jpg'
import Chef2 from '../../assets/chefs/chef2.jpg'
import Chef3 from '../../assets/chefs/chef3.jpg'
import Chef4 from '../../assets/chefs/chef4.jpg'
import Chef5 from '../../assets/chefs/chef5.jpg'

const AboutusPage = () => {
	const StaffArray = [
		{ id: 0, img: Chef1, heading: 'Contrary to popular belief, Lorem Ipsum is ', tag: 'Lorem Ipsum' },
		{ id: 0, img: Chef2, heading: 'Contrary to popular belief, Lorem Ipsum is ', tag: 'Lorem Ipsum' },
		{ id: 0, img: Chef3, heading: 'Contrary to popular belief, Lorem Ipsum is ', tag: 'Lorem Ipsum' },
		{ id: 0, img: Chef4, heading: 'Contrary to popular belief, Lorem Ipsum is ', tag: 'Lorem Ipsum' },
		{ id: 0, img: Chef5, heading: 'Contrary to popular belief, Lorem Ipsum is ', tag: 'Lorem Ipsum' },
	]

	return (
		<div className="aboutus_page">
			<AboutUsTagCard />

			<AboutResturent />

			<RightCarusal ContentArray={StaffArray} title="Our Staff" buttonText="View all Dishes" />
		</div>
	)
}

export default AboutusPage
