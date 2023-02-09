import Footer from '../components/footer'
import Navbar from '/components/navbar.js'
import s from '../styles/Layout.module.css'
import Head from 'next/head'
export default function Layout({ children }) {
	return (
		<>
			<Navbar />
			<div className={s.content}>{children}</div>
			<div className={s.wrongWay}>
				<h1>Snu telefonen din tilbake for å fortsette</h1>
			</div>

			<Footer />
		</>
	)
}
