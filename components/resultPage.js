import Link from 'next/link'
import s from '../styles/result.module.css'
import Header from './Header'

export default function Result({ cmsDataG1, userInputGroupe1 }) {
	// const result = cmsDataG1.map((item) => {
	// 	const fag = item.name
	// 	const value = item.class
	// 	// let obj = { [fag]: value }
	// 	// console.log({ [fag]: value })
	// 	let newArr = Object.create(item.class)
	// 	return newArr
	// })
	// console.log(result)

	console.log(userInputGroupe1.Arbeidsgrupper + userInputGroupe1.Storgrupper + userInputGroupe1.Seminar)

	const cms = cmsDataG1.map((item) => {
		return item.class
	})
	const cmsSum = cms.map((i) => i).reduce((prev, curr) => prev + curr, 0)
	console.log(cmsSum)

	return (
		<div className={s.container}>
			{/* <div className={s.content}>
				<Header>Din oppmøte prosent er {result}%</Header>
				<Link href={'/'}>Ny utregning</Link>
			</div> */}
		</div>
	)
}
