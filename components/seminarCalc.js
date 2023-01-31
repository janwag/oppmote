import Header from './Header'
import s from '../styles/result.module.css'

export default function SemiarCalc({ userInputGroupe2, cmsDataG2 }) {
	const seminar = cmsDataG2[0].class
	const userData = userInputGroupe2.Seminar
	const finalSum = (userData / seminar) * 100
	return (
		<div className={s.container}>
			<div className={s.content}>
				<Header>Din oppmøte prosent er {finalSum}%</Header>
				<button
					onClick={() => {
						window.history.go('/pages/velgfag/[slug]')
					}}>
					Tilbake
				</button>
				<button
					onClick={() => {
						window.history.back()
					}}>
					Ny utregning
				</button>
			</div>
		</div>
	)
}
