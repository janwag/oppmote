import Footer from '../components/footer'
import Navbar from '/components/navbar.js'
import s from '../styles/Layout.module.css'
import Head from 'next/head'
export default function Layout({ children }) {
	return (
		<>
			<Head>
				<title>Nextjs</title>
				<meta charset='UTF-8' />
				<meta
					name='viewport'
					content='width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0'
				/>
				<meta
					http-equiv='X-UA-Compatible'
					content='ie=edge'
				/>
			</Head>
			<Navbar />
			<div className={s.content}>{children}</div>
			<Footer />
		</>
	)
}
