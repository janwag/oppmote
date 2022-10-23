import styles from '../styles/Navbar.module.css'
import Image from 'next/image'
import logo from '/assets/Logo.svg'
export default function Navbar() {
	return (
		<div className={styles.navbar}>
			<div className={styles.text}>
				<p>Foks</p>
			</div>

			<div className={styles.logo}>
				<Image
					src={logo}
					width={1230}
					height={1143}
				/>
			</div>
		</div>
	)
}
