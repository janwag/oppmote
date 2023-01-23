import Link from 'next/link'
import s from '../styles/result.module.css'
import Header from './Header'

export default function Result({ cmsDataG1, userInputGroupe1, cmsDataG2, userInputGroupe2 }) {
	const Seminar = userInputGroupe2.Seminar || 0 * 100/ 
	const Kommentering = userInputGroupe2.Kommenteringer || 0
	const Oppgaver = userInputGroupe2.Oppgaver || 0

	const cmsDataGruppe2 = cmsDataG2.map((item) => {
		return item.class
	})
	const userSumGruppe2 = Seminar + Kommentering + Oppgaver
	const cmsSumGruppe2 = cmsDataGruppe2.map((i) => i).reduce((prev, curr) => prev + curr, 0)
	const totalUserSumGruppe2 = (userSumGruppe2 / cmsSumGruppe2) * 100
	/* --------------------------------- gruppe1 -------------------------------- */
	const arbeidsgrupper = userInputGroupe1.Arbeidsgrupper || 0
	const storgrupper = userInputGroupe1.Storgrupper || 0
	const seminar = userInputGroupe1.Seminar || 0

	const userSumGruppe1 = arbeidsgrupper + storgrupper + seminar

	const cmsDataGruppe1 = cmsDataG1.map((item) => {
		return item.class
	})
	const cmsSumGruppe1 = cmsDataGruppe1.map((i) => i).reduce((prev, curr) => prev + curr, 0)
	const totalUserSumGruppe1 = (userSumGruppe1 / cmsSumGruppe1) * 100
	console.log(totalUserSumGruppe1)

	/* ------------------------------------------------------------------------- */
	const finalUserOutput = totalUserSumGruppe1 + totalUserSumGruppe2
	const finalCmsOutput = cmsSumGruppe1 + cmsSumGruppe2
	const output = (finalUserOutput / finalCmsOutput) * 100
	return (
		<div className={s.container}>
			{output}
			{/* <div className={s.content}>
				<Header>Din oppmøte prosent er {result}%</Header>
				<Link href={'/'}>Ny utregning</Link>
			</div> */}
		</div>
	)
}
