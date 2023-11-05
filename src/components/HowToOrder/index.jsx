import Container from '../../layout/Container'
import ReasonsArticle from '../ReasonsArticle'

import styles from './HowToOrder.module.scss'
import docs from '../../assets/icons/docs.png'
import gallery from '../../assets/icons/gallery.png'
import payment from '../../assets/icons/payment.png'
import delivery from '../../assets/icons/delivery.png'

const orsers = [
	{
		id: 0,
		icon: docs,
		title: 'Leave a request on site',
		paragraph: 'Our staff will contact you to get details of order',
	},
	{
		id: 1,
		icon: gallery,
		title: 'Photo-Report',
		paragraph:
			'Before delivering we would send you a photo-report of a ready product, in order to make sure you that your order is ready',
	},
	{
		id: 2,
		icon: payment,
		title: 'Payment Method',
		paragraph: 'Cash or Credit card paymet after delivering',
	},
	{
		id: 3,
		icon: delivery,
		title: 'Delivery',
		paragraph:
			'We take respondibility to pack and deliver your order to any place and in any time!',
	},
]

const HowToOrder = () => {
	return (
		<Container className={styles['ordes']}>
			<h2 className={styles['orders__title']}>4 Reasons To Choose Us!</h2>
			<div className={styles['orders__all']}>
				{orsers &&
					orsers.map(item => {
						return (
							<ReasonsArticle
								key={item.id}
								id={item.id}
								icon={item.icon}
								title={item.title}
								paragraph={item.paragraph}
							/>
						)
					})}
			</div>
		</Container>
	)
}

export default HowToOrder
