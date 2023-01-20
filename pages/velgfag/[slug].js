import s from '../../styles/slug.module.css'
import groq from 'groq'
import client from '../../client'
import { useState } from 'react'
import Result from '../../components/resultPage'
import { useForm } from 'react-hook-form'
import ClassNameHeader from '../../components/ClassNameHeader'

export default function ProfilePage({ data }) {
	const [show, setShow] = useState([])
	const [restClass, setRestClass] = useState([])
	const [arbeidStorGrupper, setArbeidStorGrupper] = useState([])

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
					<ClassNameHeader text={data.className} />
					<div className={s.inputWrapper}>
						{data.Gruppe1?.map((item) => {
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
						{data.Gruppe2?.map((item) => {
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
				<>
					<Result
						classGruppe1={data.Gruppe1}
						classGruppe2={data.Gruppe2}
						userInputArbeidStorgrupper={arbeidStorGrupper}
						userInputRest={restClass}
					/>
				</>
			)}
		</>
	)
}

export async function getServerSideProps(context) {
	const { slug = '' } = context.params
	const data = await client.fetch(
		`
    *[_type == "data" && slug.current == $slug][0]{name, slug, className, code, classes, Gruppe1, Gruppe2}
  `,
		{ slug }
	)
	return {
		props: {
			data,
		},
	}
}
