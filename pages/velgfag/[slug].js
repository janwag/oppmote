import s from '../../styles/slug.module.css'
import groq from 'groq'
import client from '../../client'
import { useState } from 'react'
import Result, { Test } from '../../components/resultPage'
import { useForm } from 'react-hook-form'
import ClassNameHeader from '../../components/ClassNameHeader'
import { loadGetInitialProps } from 'next/dist/shared/lib/utils'
import SeminarCalc from '../../components/seminarCalc'

export default function ProfilePage({ cmsdata }) {
	if (cmsdata.name != 'EXFAC') {
		const [show, setShow] = useState(false)
		const [restClass, setRestClass] = useState()
		const [arbeidStorGrupper, setArbeidStorGrupper] = useState()

		const { register, handleSubmit } = useForm()

		const onSubmit = (data) => {
			setArbeidStorGrupper({
				Arbeidsgrupper: +data.Arbeidsgrupper,
				Storgrupper: +data.Storgrupper,
			})
			setRestClass({
				Oppgaver: +data.Oppgaver,
				Kommenteringer: +data.Kommenteringer,
				Seminar: +data.Seminar,
			})

			setShow(true)
		}
		return (
			<>
				{show == false ? (
					<form
						className={s.container}
						onSubmit={handleSubmit(onSubmit)}>
						<ClassNameHeader text={cmsdata.className} />
						<div className={s.inputWrapper}>
							{cmsdata.Gruppe1?.map((item) => {
								return (
									<div
										key={item._key}
										className={s.inputContainer}>
										<p>
											Jeg har deltat på
											<input
												min='0'
												max={item.class}
												required
												className={s.input}
												key={item._id}
												type='number'
												{...register(item.name)}
											/>
											av {item.class} {item.name}
										</p>
									</div>
								)
							})}
							{cmsdata.Gruppe2?.map((item) => {
								return (
									<div
										key={item._key}
										className={s.inputContainer}>
										<p>
											Jeg har deltat på
											<input
												min='0'
												max={item.class}
												required
												className={s.input}
												key={item._id}
												type='number'
												{...register(item.name)}
											/>
											av {item.class} {item.name}
										</p>
									</div>
								)
							})}
						</div>
						<input
							className={s.button}
							type='submit'
						/>
					</form>
				) : (
					<Result
						userInputGroupe2={restClass}
						userInputGroupe1={arbeidStorGrupper}
						cmsDataG1={cmsdata.Gruppe1}
						cmsDataG2={cmsdata.Gruppe2}
					/>
				)}
			</>
		)
	} else {
		const [seminar, setSeminar] = useState(false)
		const [restClass, setRestClass] = useState()

		const { register, handleSubmit } = useForm()

		const onSubmit = (data) => {
			setRestClass({
				Seminar: +data.Seminar,
			})

			setSeminar(true)
		}
		return (
			<>
				{seminar == false ? (
					<form
						className={s.container}
						onSubmit={handleSubmit(onSubmit)}>
						<ClassNameHeader text={cmsdata.className} />
						<div className={s.inputWrapper}>
							{cmsdata.Gruppe2?.map((item) => {
								return (
									<div
										key={item._key}
										className={s.inputContainer}>
										<p>
											Jeg har deltat på
											<input
												min='0'
												max={item.class}
												required
												className={s.input}
												key={item._id}
												type='number'
												{...register(item.name)}
											/>
											av {item.class} {item.name}
										</p>
									</div>
								)
							})}
						</div>
						<input
							className={s.button}
							type='submit'
						/>
					</form>
				) : (
					<SeminarCalc
						userInputGroupe2={restClass}
						cmsDataG2={cmsdata.Gruppe2}
					/>
				)}
			</>
		)
	}
}

export async function getServerSideProps(context) {
	const { slug = '' } = context.params
	const cmsdata = await client.fetch(
		`
    *[_type == "data" && slug.current == $slug][0]{name, slug, className, code, classes, Gruppe1, Gruppe2}
  `,
		{ slug }
	)
	return {
		props: {
			cmsdata,
		},
	}
}
