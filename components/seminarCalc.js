import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Result from './resultPage'
import s from '../styles/slug.module.css'
import ClassNameHeader from '../components/ClassNameHeader'
import SeminarResult from './seminarResult'

export default function SemiarCalc({ cmsdata }) {
	const [show, setShow] = useState(false)
	const [restClass, setRestClass] = useState()

	const { register, handleSubmit } = useForm()

	const onSubmit = (data) => {
		setRestClass({
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
						{cmsdata.Gruppe2?.map((item) => {
							return (
								<div
									key={item._key}
									className={s.inputContainer}>
									<p>
										Jeg har fullført
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
				<SeminarResult
					dataFromCms={cmsdata}
					userInputGroupe2={restClass}
				/>
			)}
		</>
	)
}
