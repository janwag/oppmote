import Header from './Header'
import s from '../styles/result.module.css'
import Head from 'next/head'

const SeminarResult = ({ dataFromCms, userInputGroupe2 }) => {
	const seminar = dataFromCms.Gruppe2[0].class
	const userData = userInputGroupe2.Seminar
	console.log(userData)
	const finalSum = (userData / seminar) * 100
	return (
		<>
			<Head>
				<title>Ditt resultat | Oppmøteprosent</title>
			</Head>
			<div className={s.container}>
				<div className={s.content}>
					<Header>Din oppmøteprosent er {finalSum}%</Header>
					<button
						className={s.button}
						onClick={() => {
							window.history.go('/pages/velgfag/[slug]')
						}}>
						Tilbake
					</button>
					<button
						className={s.button}
						onClick={() => {
							window.history.back()
						}}>
						Ny utregning
					</button>
				</div>
			</div>
		</>
	)
}
export default SeminarResult
