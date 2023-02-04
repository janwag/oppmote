import Link from 'next/link'
import Header from '../components/Header'
import s from '../styles/Home.module.css'
function Home() {
	return (
		<div className={s.container}>
			<div className={s.content}>
				<Header>Regn ut din oppmøteprosent</Header>
				<div className={s.link}>
					<Link href='/velgfag'>Velg Fag</Link>
				</div>
				<div className={s.figure} />
			</div>
		</div>
	)
}
export default Home
