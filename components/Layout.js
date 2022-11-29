import Footer from '../components/footer'
import Navbar from '/components/navbar.js'
import s from '../styles/layout.module.css'
// templet komponent som man wrapper rundt andre komponenter slik. Kan brukes flere ganger
export default function Layout({ children }) {
	return (
		<>
			<Navbar />
			<div className={s.container}></div>
			{children}
			<Footer />
		</>
	)
}
