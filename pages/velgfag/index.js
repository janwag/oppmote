import Link from 'next/link'
import s from '../../styles/VelgFag.module.css'
import groq from 'groq'

// 'https://qmgpu00g.api.sanity.io/v1/data/query/production?query=*[_type==%22data%22]'

export async function getStaticProps() {
	const url = 'https://qmgpu00g.api.sanity.io/v1/data/query/production?query='
	const data = await fetch(url + groq`*[_type=="data"]`).then((data) =>
		data.json()
	)

	return {
		props: {
			data,
		},
	}
}
const VelgFag = ({ data }) => {
	const list = data.result
	return (
		<>
			<h1>Velg fag du vil regne ut</h1>

			{list.map((item) => {
				return (
					<Link href={'/velgfag/' + item.slug.current.toString()}>
						{item.name}
					</Link>
				)
			})}
		</>
	)
}

export default VelgFag
