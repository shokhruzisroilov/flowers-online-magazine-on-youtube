import Badge from '../../components/Badge'
import CategoresBlock from '../../components/CategoresBlock'
import DiscountsCarusel from '../../components/DiscountsCarusel'
import OrderFrom from '../../components/OrderForm'
import ReasonsChoose from '../../components/ReasonsChoose'
import HowToOrder from '../../components/HowToOrder'
import Footer from '../../components/Footer'

const Home = () => {
	return (
		<>
			<Badge />
			<CategoresBlock />
			<DiscountsCarusel />
			<OrderFrom />
			<ReasonsChoose />
			<HowToOrder />
			<Footer />
		</>
	)
}

export default Home
