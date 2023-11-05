import Container from '../../layout/Container'
import styles from './OrderForm.module.scss'
import flowersForm from '../../assets/images/flowers-form.jpg'
import { useState } from 'react'

const initialData = {
	name: '',
	tel: '',
	text: '',
}
const OrderFrom = () => {
	const [fileds, setFileds] = useState(initialData)

	const handleChange = e => {
		setFileds(prev => ({ ...prev, [e.target.name]: e.target.value }))
	}

	const handleSubmit = e => {
		e.preventDefault()
		setFileds(initialData)
	}

	return (
		<Container className={styles['order-form']}>
			<h2 className={styles['order-form__title']}>Order A Unique Basket!</h2>
			<form className={styles['order-form__form']}>
				<div className={styles['order-form__fileds']}>
					<input
						type='text'
						placeholder='Name*'
						className={styles['order-form__input']}
						onChange={handleChange}
						value={fileds.name}
						name='name'
					/>
					<input
						type='number'
						placeholder='Phone Number*'
						className={styles['order-form__input']}
						onChange={handleChange}
						value={fileds.tel}
						name='tel'
					/>
					<textarea
						placeholder='Your Adreass*'
						className={styles['order-form__textarea']}
						onChange={handleChange}
						value={fileds.text}
						name='text'
					></textarea>
					<button
						className={styles['order-form__button']}
						onClick={handleSubmit}
					>
						Send
					</button>
				</div>
				<img
					src={flowersForm}
					alt='flowers image'
					className={styles['order-form__image']}
				/>
			</form>
		</Container>
	)
}

export default OrderFrom
