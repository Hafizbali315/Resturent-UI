import TimingCard from './../../components/TimingCard/index'
import './style.scss'
import RightCarusal from './../../components/RightCarusal/index'

import Dish1 from '../../assets/dishes/1.jpg'
import Dish2 from '../../assets/dishes/2.jpg'
import Dish3 from '../../assets/dishes/3.jpg'
import Dish4 from '../../assets/dishes/4.jpg'
import Dish5 from '../../assets/dishes/5.jpg'

const TimingPage = () => {
	const DishesArray = [
		{ id: 0, img: Dish1, heading: 'Contrary to popular belief, Lorem Ipsum is ', tag: 'Lorem Ipsum' },
		{ id: 0, img: Dish2, heading: 'Contrary to popular belief, Lorem Ipsum is ', tag: 'Lorem Ipsum' },
		{ id: 0, img: Dish3, heading: 'Contrary to popular belief, Lorem Ipsum is ', tag: 'Lorem Ipsum' },
		{ id: 0, img: Dish4, heading: 'Contrary to popular belief, Lorem Ipsum is ', tag: 'Lorem Ipsum' },
		{ id: 0, img: Dish5, heading: 'Contrary to popular belief, Lorem Ipsum is ', tag: 'Lorem Ipsum' },
	]

	return (
		<div className="timing_page">
			<TimingCard />

			<RightCarusal ContentArray={DishesArray} title="Our PopularDishes" buttonText="View all Dishes" />
		</div>
	)
}

export default TimingPage
