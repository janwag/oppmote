import Link from 'next/link'
import s from '../styles/Home.module.css'
function Home() {
	return (
		<div className={s.container}>
			<div className={s.content}>
				<h1 className={s.header}>
					Regn ut din oppmøte <br /> prosent
				</h1>
				<div className={s.link}>
					<Link href='/velgfag'>Velg Fag</Link>
				</div>
			</div>
		</div>
	)
}

export default Home
