import styles from '../styles/Navbar.module.css'
import Image from 'next/image'
import logo from '/assets/Logo.svg'
import Link from 'next/link'
const Navbar = () => {
	return (
		<div className={styles.navbar}>
			<Link href='/'>
				<div className={styles.logo}>
					<Image
						src={logo}
						width={1230}
						height={1143}
						alt={'test'}
					/>
				</div>
			</Link>
		</div>
	)
}

export default Navbar
