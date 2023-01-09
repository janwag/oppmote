import s from '../styles/ClassNameHeader.module.css'
function ClassNameHeader({ text }) {
	return <h1 className={s.header}>{text}</h1>
}
export default ClassNameHeader
