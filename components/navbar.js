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
						width={30}
						height={30}
						alt={'logo'}
					/>
				</div>
			</Link>
		</div>
	)
}

export default Navbar
