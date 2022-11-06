import Link from 'next/link'
import s from '../styles/Home.module.css'
function Home() {
	return (
		<div className={s.container}>
			<h1>
				Regn ut din oppmøte <br /> prosent
			</h1>
			<div>
				<Link href='/velgfag'>Velg Fag</Link>
			</div>
		</div>
	)
}
export default Home
