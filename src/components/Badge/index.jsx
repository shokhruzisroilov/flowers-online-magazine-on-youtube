import Container from '../../layout/Container'
import style from './Badge.module.scss'

const Badge = () => {
	return (
		<Container className={style['badge']}>
			<div className={style['badge__content']}>
				<h1 className={style['badge__title']}>Fruit compositions</h1>
				<p className={style['badge__text']}>
					You can choose any product from our catalog or order your own
				</p>
			</div>
		</Container>
	)
}

export default Badge
