import './Container.module.scss'
import style from './Container.module.scss'

const Container = ({ children, className }) => {
	return <div className={`${style['container']} ${className}`}>{children}</div>
}

export default Container
