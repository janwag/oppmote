import FagListe from '../../components/fagliste'
import s from '../../styles/VelgFag.module.css'
function VelgFag() {
	return (
		<div className={s.container}>
			<h1>Velg fag du vil regne ut</h1>
			<FagListe />
		</div>
	)
}

export default VelgFag
