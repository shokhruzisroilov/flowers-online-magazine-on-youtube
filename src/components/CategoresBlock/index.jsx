import style from './CategoresBlock.module.scss'
import { categories } from '../../routes/category'
import Container from '../../layout/Container'
import { Link } from 'react-router-dom'

const CategoresBlock = () => {
	return (
		<Container className={style['categories']}>
			{categories.map(item => {
				return (
					<div key={item.id} className={style['categories__item']}>
						<img
							src={item.images}
							alt={item.text}
							className={style['categories__images']}
						/>
						<Link to={item.link} className={style['categories__button']}>
							{item.text}
						</Link>
					</div>
				)
			})}
		</Container>
	)
}

export default CategoresBlock
