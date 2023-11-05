import styles from './ProductCard.module.scss'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons'
import { faHeart as FaHeartSolid } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { handleLike } from '../../app/features/likeSlice'

const ProductCard = ({ data, liked }) => {
	const [selected, setSelected] = useState(false)
	const dispatch = useDispatch()
	const { like } = useSelector(state => state)
	console.log(like)
	const selectHandle = () => {
		setSelected(select => !select)
	}

	const handeleLikeButton = () => {
		dispatch(handleLike(data))
	}

	return (
		<div className={styles['card']}>
			<img
				src={data.images}
				alt={data.name}
				className={styles['card__image']}
			/>
			<h3 className={styles['card__title']}>{data.name}</h3>
			<p className={styles['card__price']}>
				{data.price} USD.{' '}
				<span className={styles['card__discount']}>{data.discount} USD.</span>
			</p>
			<button
				className={selected ? styles['card__button'] : styles['card__selected']}
				onClick={selectHandle}
			>
				{selected ? 'Added' : 'Add To Cart'}
			</button>
			<button className={styles['card__like']} onClick={handeleLikeButton}>
				<FontAwesomeIcon
					icon={liked ? FaHeartSolid : faHeartRegular}
					className={styles['card__heart']}
				/>
			</button>
		</div>
	)
}

export default ProductCard
