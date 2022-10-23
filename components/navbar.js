import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Navbar.module.css'

export default function Navbar() {
	return (
		<div className={styles.navbar}>
			<div className={styles.flex_container}>

				<div className={styles.links}>
					<Link href='/'>Hjem</Link>
					<Link href='/about'>About</Link>
					<Link href='/prosjektet'>Prosjektet</Link>
				</div>
			</div>
		</div>
	)
}
