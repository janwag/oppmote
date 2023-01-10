import s from '../styles/Header.module.css'
function Header({ children }) {
	return <h1 className={s.header}>{children}</h1>
}
export default Header
