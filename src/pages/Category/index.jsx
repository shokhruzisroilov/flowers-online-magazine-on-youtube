import styles from './Category.module.scss'
import { useParams } from 'react-router-dom'
import ProductCard from '../../components/ProductCard'
import Container from '../../layout/Container'
import { useEffect, useState } from 'react'
import './Category.module.scss'
import { useSelector } from 'react-redux'

const Category = () => {
	const { type } = useParams()
	const [data, setData] = useState(null)
	const {like} = useSelector(state=>state)
	useEffect(() => {
		const fetchData = async () => {
			const data = await fetch(
				`http://localhost:4000/products?category=${type}`
			)
			const cards = await data.json()
			setData(cards)
		}
		fetchData()
	}, [type])

	return (
		<>
			<Container className={styles['product_cards']}>
				{data &&
					data.map(item => {
						return (
							<ProductCard
								data={item}
								key={item.id}
								liked={item.id in like}
							/>
						)
					})}
			</Container>
		</>
	)
}

export default Category
