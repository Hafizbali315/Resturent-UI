import TimingCard from './../../components/TimingCard/index'
import Cover from '../../components/Cover'
import RightCarusal from '../../components/RightCarusal'
import './style.scss'

import Dish1 from '../../assets/dishes/1.jpg'
import Dish2 from '../../assets/dishes/2.jpg'
import Dish3 from '../../assets/dishes/3.jpg'
import Dish4 from '../../assets/dishes/4.jpg'
import Dish5 from '../../assets/dishes/5.jpg'

import Chef1 from '../../assets/chefs/chef1.jpg'
import Chef2 from '../../assets/chefs/chef2.jpg'
import Chef3 from '../../assets/chefs/chef3.jpg'
import Chef4 from '../../assets/chefs/chef4.jpg'
import Chef5 from '../../assets/chefs/chef5.jpg'

const HomePage = () => {
	const DishesArray = [
		{ id: 0, img: Dish1, heading: 'Contrary to popular belief, Lorem Ipsum is ', tag: 'Lorem Ipsum' },
		{ id: 0, img: Dish2, heading: 'Contrary to popular belief, Lorem Ipsum is ', tag: 'Lorem Ipsum' },
		{ id: 0, img: Dish3, heading: 'Contrary to popular belief, Lorem Ipsum is ', tag: 'Lorem Ipsum' },
		{ id: 0, img: Dish4, heading: 'Contrary to popular belief, Lorem Ipsum is ', tag: 'Lorem Ipsum' },
		{ id: 0, img: Dish5, heading: 'Contrary to popular belief, Lorem Ipsum is ', tag: 'Lorem Ipsum' },
	]

	const StaffArray = [
		{ id: 0, img: Chef1, heading: 'Contrary to popular belief, Lorem Ipsum is ', tag: 'Lorem Ipsum' },
		{ id: 0, img: Chef2, heading: 'Contrary to popular belief, Lorem Ipsum is ', tag: 'Lorem Ipsum' },
		{ id: 0, img: Chef3, heading: 'Contrary to popular belief, Lorem Ipsum is ', tag: 'Lorem Ipsum' },
		{ id: 0, img: Chef4, heading: 'Contrary to popular belief, Lorem Ipsum is ', tag: 'Lorem Ipsum' },
		{ id: 0, img: Chef5, heading: 'Contrary to popular belief, Lorem Ipsum is ', tag: 'Lorem Ipsum' },
	]

	return (
		<div className="home_page">
			<Cover />

			{/* Dishes */}
			<RightCarusal ContentArray={DishesArray} title="Our PopularDishes" buttonText="View all Dishes" />

			{/* Our Timing Card*/}
			<TimingCard />

			{/* Staff */}
			<RightCarusal ContentArray={StaffArray} title="Our Staff" buttonText="View all Dishes" />
		</div>
	)
}

export default HomePage
