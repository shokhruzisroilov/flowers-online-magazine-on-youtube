import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTelegram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import styles from './Footer.module.scss'

const Footer = () => {
	return (
		<div className={styles['footer']}>
			<div className={styles['footer__content']}>
				<div className={styles['footer__social-media']}>
				<FontAwesomeIcon icon={faYoutube} className={styles['footer__icon']}/>
				<FontAwesomeIcon icon={faTelegram} className={styles['footer__icon']}/>
				<FontAwesomeIcon icon={faInstagram} className={styles['footer__icon']}/>
				</div>
				<div className={styles['footer__call-number']}>+998 94 008 04 73</div>
			</div>
			<div className={styles['footer__privet']}>FloristMan © 2022</div>
		</div>
	)
}

export default Footer
