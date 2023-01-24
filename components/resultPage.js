import Link from 'next/link'
import s from '../styles/result.module.css'
import Gruppe1calc from './Gruppe1calc'
import Gruppe2calc from './Gruppe2calc'
import Header from './Header'

export default function Result({ cmsDataG1, userInputGroupe1, cmsDataG2, userInputGroupe2 }) {
	const gruppe1 = Gruppe1calc(cmsDataG1, userInputGroupe1)
	const gruppe2 = Gruppe2calc(cmsDataG2, userInputGroupe2)
	const nummberOfArr = gruppe1.gruppe1Arr.length + gruppe2.arr.length
	const finalSum = Math.floor(gruppe1.grupperProsent + gruppe2.added) / nummberOfArr
	return (
		<div className={s.container}>
			<div className={s.content}>
				<Header>Din oppmøte prosent er {finalSum}%</Header>
				<Link href={'/'}>Ny utregning</Link>
			</div>
		</div>
	)
}
