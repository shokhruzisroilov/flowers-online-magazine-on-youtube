import Container from '../../layout/Container'
import ReasonsArticle from '../ReasonsArticle'

import styles from './ReasonsChoose.module.scss'
import star from '../../assets/icons/star-icon.png'
import photo from '../../assets/icons/photo-icon.png'
import price from '../../assets/icons/price-icon.png'
import time from '../../assets/icons/time-icon.png'

const reasonsChoose = [
	{
		id: 0,
		icon: star,
		title: 'Quality',
		paragraph: 'On this market there are only selected high quality sellers',
	},
	{
		id: 1,
		icon: photo,
		title: 'Photo-Report',
		paragraph:
			'Before delivering we would send you a photo-report of a ready basket',
	},
	{
		id: 2,
		icon: price,
		title: 'Price',
		paragraph:
			'Yes, We have the cheapest prices! By 2-3 times cheaper from any seller!',
	},
	{
		id: 3,
		icon: time,
		title: 'Time',
		paragraph:
			'We deliver from 2 hours! (Real time not marketing way) And receive orders 24/7',
	},
]

const ReasonsChoose = () => {
	return (
		<Container className={styles['reasons-choose']}>
			<h2 className={styles['reasons-choose__title']}>
				4 Reasons To Choose Us!
			</h2>
			<div className={styles['reasons-choose__all']}>
				{reasonsChoose &&
					reasonsChoose.map(item => {
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

export default ReasonsChoose
