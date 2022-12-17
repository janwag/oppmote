import Link from 'next/link'
import s from '../../styles/VelgFag.module.css'
import groq from 'groq'

export async function getStaticProps() {
	const url = 'https://qmgpu00g.api.sanity.io/v1/data/query/production?query='
	const data = await fetch(url + groq`*[_type=="data"]`).then((data) => data.json())

	return {
		props: {
			data,
		},
	}
}
const VelgFag = ({ data }) => {
	console.log(data)
	const list = data.result
	return (
		<div className={s.container}>
			<h1>Velg fag du vil regne ut</h1>

			{list.map((item) => {
				return (
					<div
						className={s.link}
						key={item._id}>
						<Link href={'/velgfag/' + item.slug.current.toString()}>{item.name}</Link>
					</div>
				)
			})}
		</div>
	)
}

export default VelgFag
