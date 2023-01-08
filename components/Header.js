import s from '../styles/Header.module.css'
function Header({ text }) {
	return <h1 className={s.header}>{text}</h1>
}
export default Header
