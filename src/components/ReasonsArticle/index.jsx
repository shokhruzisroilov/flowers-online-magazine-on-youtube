import styles from './ReasonsArticle.module.scss'


const ReasonsArticle = ({id, icon, title, paragraph}) => {
	return (
		<div className={styles['reasons-article']}>
				<img
					src={icon}
					alt='star icon'
					className={styles['reasons-article__icon']}
				/>
				<h3 className={styles['reasons-article__title']}>{title}</h3>
				<p className={styles['reasons-article__paragraph']}>{paragraph}</p>
		</div>
	)
}

export default ReasonsArticle
