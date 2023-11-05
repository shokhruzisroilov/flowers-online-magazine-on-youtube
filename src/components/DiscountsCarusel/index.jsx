import { Swiper, SwiperSlide } from 'swiper/react'
import ProductCard from '../ProductCard'
import Countainer from '../../layout/Container'
import { useState, useEffect } from 'react'
import { Navigation } from 'swiper/modules'

import styles from './DiscountsCarusel.module.scss'
import 'swiper/css'
import 'swiper/css/navigation'
import './DiscountsCarusel.styles.scss'
import { useSelector } from 'react-redux'

const DiscountsCarusel = () => {
	const [data, setData] = useState(null)
	const { like } = useSelector(store => store)
	useEffect(() => {
		const fetchData = async () => {
			const res = await fetch('http://localhost:4000/discounts')
			const discounts = await res.json()
			setData(discounts)
		}
		fetchData()
	}, [])

	return (
		<Countainer className={styles['discounts']}>
			<h2 className={styles['discounts__heading']}>Special Discount</h2>
			{data && (
				<Swiper
					slidesPerView={4}
					navigation={true}
					modules={[Navigation]}
					className={styles['discounts__products']}
				>
					{data.map(item => (
						<SwiperSlide key={item.id}>
							<ProductCard id={item.id} data={item} liked={item.id in like} />
						</SwiperSlide>
					))}
				</Swiper>
			)}
		</Countainer>
	)
}

export default DiscountsCarusel
