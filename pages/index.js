import Link from 'next/link'
import s from '../styles/Home.module.css'
function Home() {
	return (
		<div className={s.container}>
			<h1 className={s.header}>
				Regn ut din oppmøte <br /> prosent
			</h1>
			<div className={s.link}>
				<Link href='/velgfag'>Velg Fag</Link>
			</div>
		</div>
	)
}
export default Home
