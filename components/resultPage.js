import Head from 'next/head'
import Link from 'next/link'
import s from '../styles/result.module.css'
import Gruppe1calc from './Gruppe1calc'
import Gruppe2calc from './Gruppe2calc'
import Header from './Header'

export default function Result({ cmsDataG1, userInputGroupe1, cmsDataG2, userInputGroupe2 }) {
	const gruppe1 = Gruppe1calc(cmsDataG1, userInputGroupe1)
	const gruppe2 = Gruppe2calc(cmsDataG2, userInputGroupe2)
	const nummberOfArr = gruppe1.gruppe1Arr.length + gruppe2.arr.length
	const finalSum = (gruppe1.grupperProsent + gruppe2.added) / nummberOfArr
	return (
		<>
			<Head>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1.0'
				/>
				<meta
					property='og:title'
					content='My page title'
					key='title'
				/>
				<meta
					name='apple-mobile-web-app-capable'
					content='yes'
				/>
			</Head>
			<div className={s.container}>
				<div className={s.content}>
					<Header>Din oppmøte prosent er {finalSum.toPrecision(4)}%</Header>
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
				<div className={s.figureContainer}>
					<div className={s.figure} />
				</div>
			</div>
		</>
	)
}
