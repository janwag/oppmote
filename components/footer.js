import Link from 'next/link'
import s from '../styles/Footer.module.css'
export default function Footer() {
	return (
		<div className={s.footer}>
			<div className={s.text}>
				<p>© Foks AS 2023</p>
				<p>
					Viktig info om tjenesten <Link href={'/info'}>her.</Link>
				</p>
			</div>
			<div className={s.credit}>
				<p>Utvikler // Teknsik bistand:</p>
				<p>Sander Tonheim // Ole Håvard Furuseth Bergan</p>
			</div>
		</div>
	)
}
