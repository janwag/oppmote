import s from '../styles/infoHeader.module.css'
export default function InfoHeader({ header }) {
	return <h1 className={s.header}>{header}</h1>
}
