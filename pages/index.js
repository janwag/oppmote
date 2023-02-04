import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header'
import s from '../styles/Home.module.css'
function Home() {
	return (
		<>
			<Head>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1.0'
				/>

				<meta
					name='apple-mobile-web-app-capable'
					content='yes'
				/>
				<meta
					name='apple-mobile-web-app-status-bar-style'
					content='black-translucent'
				/>
				<meta
					name='apple-mobile-web-app-title'
					content='page title'
				/>
				<meta
					name='apple-mobile-web-app-orientations'
					content='portrait-any'
				/>
			</Head>

			<div className={s.container}>
				<div className={s.content}>
					<Header>Regn ut din oppmøteprosent</Header>
					<div className={s.link}>
						<Link href='/velgfag'>Velg Fag</Link>
					</div>
					<div className={s.figureContainer}>
						<div className={s.figure} />
					</div>
				</div>
			</div>
		</>
	)
}
export default Home
