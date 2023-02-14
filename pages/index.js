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
					content='initial-scale=1, viewport-fit=cover'></meta>
			</Head>

			<div className={s.container}>
				<div className={s.content}>
					<Header>Regn ut din oppmøteprosent</Header>
					<div className={s.link}>
						<Link href='/velgfag'>Velg fag</Link>
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
