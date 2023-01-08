import Link from 'next/link'
import styles from '../styles/Footer.module.css'
export default function Footer() {
	return (
		<div className={styles.footer}>
			<div className={styles.text}>
				<p>© Foks AS 2023</p>
			</div>
			<Link href={'/info'}>Viktig info om tjenesten her.</Link>
		</div>
	)
}
