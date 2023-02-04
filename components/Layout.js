import Footer from '../components/footer'
import Navbar from '/components/navbar.js'
import s from '../styles/Layout.module.css'
export default function Layout({ children }) {
	return (
		<>
			<meta
				name='viewport'
				content='width=device-width, initial-scale=1.0'></meta>
			<Navbar />
			<div className={s.content}>{children}</div>
			<Footer />
		</>
	)
}
