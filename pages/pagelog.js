// Hover farge kan gjerne være blå fargen fra illustrasjonen istedenfor denne som er hvit
import s from '../styles/pagelog.module.css'
import Link from 'next/link'
import Header from '../components/Header'
import Render from '../components/FetchChangeLog'

const pagelog = (data) => {
	return (
		<div className={s.container}>
			<Header>Changelog</Header>
			<Render />
		</div>
	)
}
export default pagelog
