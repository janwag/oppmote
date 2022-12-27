import styles from '../styles/Navbar.module.css'
import Image from 'next/image'
import logo from '/assets/Logo.svg'
import Link from 'next/link'
export default function Navbar() {
	return (
		<div className={styles.navbar}>
			<div className={styles.logo}>
				<Link href={'/'}>
					<Image
						src={logo}
						width={1230}
						height={1143}
						alt={'test'}
					/>
				</Link>
			</div>
		</div>
	)
}
