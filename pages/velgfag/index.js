import s from '../../styles/VelgFag.module.css'

export async function getStaticProps() {
	const url =
		'https://qmgpu00g.api.sanity.io/v1/data/query/production?query=*[_type==%22data%22]'

	const res = await fetch(url).then((res) => res.json())
	const data = res.result

	return {
		props: {
			data,
		},
	}
}

function VelgFag({ data }) {
	console.log(data)
	return (
		<div className={s.container}>
			<h1>Velg fag du vil regne ut</h1>
			{data.map((item) => {
				return <button key={item.id}>{item.name}</button>
			})}
		</div>
	)
}

export default VelgFag
