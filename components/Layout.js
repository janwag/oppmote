import Footer from '../components/footer'
import Navbar from '/components/navbar.js'
import s from '../styles/Layout.module.css'
export default function Layout({ children }) {
	return (
		<>
			
			<Navbar />
			<div className={s.content}>{children}</div>
			<Footer />
		</>
	)
}
