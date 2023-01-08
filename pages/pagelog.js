// Hover farge kan gjerne være blå fargen fra illustrasjonen istedenfor denne som er hvit
import s from '../styles/pagelog.module.css'
import Link from 'next/link'
import Header from '../components/Header'

function pagelog() {
	return (
		<div className={s.container}>
			<Header>Changelog</Header>
			<ul>
				<li>
					04.11.2022: Lagt inn faget <Link href='https://www.uib.no/emne/JUS136'>JUS136</Link>.
				</li>
				<li>
					15.11.2022: Endret antall oppgaver i faget <Link href='https://www.uib.no/emne/JUS135'>JUS135</Link> fra 10 til 15.
				</li>
			</ul>
		</div>
	)
}
export default pagelog
