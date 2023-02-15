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
				<div className={s.container}>
					<ClassNameHeader text={cmsdata.className} />
					<form
						className={s.fields}
						onSubmit={handleSubmit(onSubmit)}>
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
											av {item.class} {item.name.toLowerCase()}
										</p>
									</div>
								)
							})}
							<input
								className={s.button}
								type='submit'
							/>
						</div>
						<div className={s.figureContainer}>
							<div className={s.figure} />
						</div>
					</form>
				</div>
			) : (
				<SeminarResult
					dataFromCms={cmsdata}
					userInputGroupe2={restClass}
				/>
			)}
		</>
	)
}
