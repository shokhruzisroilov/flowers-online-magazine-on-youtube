import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'
import { Link, useLocation } from 'react-router-dom'
import { categories } from '../../routes/category'
import classNames from 'classnames'

import style from './Header.module.scss'
import logo from '../../assets/icons/logo.png'
import Container from '../../layout/Container'

const Header = () => {
	const location = useLocation()
	console.log(location.pathname)
	return (
		<header className={style['header']}>
			<Container className={style['header__container']}>
				<Link to='/'>
					<img
						src={logo}
						alt='floristman image'
						className={style['header__logo']}
					/>
				</Link>
				<span className={style['header__icons']}>
					<FontAwesomeIcon icon={faHeart} className={style['header__heart']} />
					<FontAwesomeIcon
						icon={faBagShopping}
						className={style['header__bag']}
					/>
				</span>
			</Container>
			<Container>
				<nav className={style['header__nav']}>
					<ul className={style['header__list']}>
						{categories.map(({ link, text }) => (
							<li key={link}>
								<Link
									to={link}
									className={classNames(style['header__link'], {
										[style['header__link_active']]: location.pathname === link,
									})}
								>
									{text}
								</Link>
							</li>
						))}
					</ul>
				</nav>
			</Container>
		</header>
	)
}

export default Header
