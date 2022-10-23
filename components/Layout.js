import Footer from './footer'
import styles from '/styles/Layout.module.css'
import Navbar from '/components/navbar.js'
// templet komponent som man wrapper rundt andre komponenter slik. Kan brukes flere ganger
export default function Layout({ children }) {
	return (
		<>
			<Navbar />
			<div className={styles.content}>{children}</div>
			<Footer />
		</>
	)
}
