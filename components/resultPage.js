import Link from 'next/link'
import s from '../styles/result.module.css'
import Header from './Header'

const Result = ({ classGruppe1, classGruppe2, userInputArbeidStorgrupper, userInputRest }) => {
	console.log(classGruppe1)
	console.log(classGruppe2)
	console.log(userInputArbeidStorgrupper)
	console.log(userInputRest)
	return (
		<div className={s.container}>
			{/* <div className={s.content}>
				<Header>Din oppmøte prosent er {result}%</Header>
				<Link href={'/'}>Ny utregning</Link>
			</div> */}
		</div>
	)
}

export default Result
