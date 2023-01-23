import Link from 'next/link'
import s from '../styles/result.module.css'
import Gruppe1calc from './Gruppe1calc'
import Gruppe2calc from './Gruppe2calc'
import Header from './Header'

export default function Result({ cmsDataG1, userInputGroupe1, cmsDataG2, userInputGroupe2 }) {
	const gruppe1 = Gruppe1calc(cmsDataG1, userInputGroupe1)
	const gruppe2 = Gruppe2calc(cmsDataG2, userInputGroupe2)

	const cmsg1 = cmsDataG1.map((item) => {
		return item.class
	})
	const cmsg2 = cmsDataG2.map((item) => {
		return item.class
	})
	const cmsSum = cmsg1.length + cmsg2.length
	console.log('cmsSum', cmsSum)
	console.log('gruppe1', gruppe1)
	const g2Length = gruppe2.length
	const gruppe2Calc = gruppe2.map((item) => {
		return item / g2Length
	})

	const res = gruppe2Calc.reduce((a, b) => {
		return a + b
	})

	const finalSum = res + gruppe1 / cmsSum
	console.log(finalSum)
	return (
		<div className={s.container}>
			{gruppe1 + gruppe2Calc / cmsSum}
			{/* <div className={s.content}>
				<Header>Din oppmøte prosent er {result}%</Header>
				<Link href={'/'}>Ny utregning</Link>
			</div> */}
		</div>
	)
}
