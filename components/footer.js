import Link from 'next/link'
import styles from '../styles/Footer.module.css'
export default function Footer() {
	return (
		<div className={styles.footer}>
			<div className={styles.text}>
				<p>© Copy right Foks AS 2022</p>
			</div>
		</div>
	)
}
