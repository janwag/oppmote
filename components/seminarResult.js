import Header from './Header'
import s from '../styles/result.module.css'

const SeminarResult = ({ dataFromCms, userInputGroupe2 }) => {
	const seminar = dataFromCms.Gruppe2[0].class
	const userData = userInputGroupe2.Seminar
	console.log(userData)
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
export default SeminarResult
