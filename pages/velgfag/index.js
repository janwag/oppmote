import Link from 'next/link'
import s from '../../styles/VelgFag.module.css'
import groq from 'groq'
import Header from '../../components/Header'

export async function getServerSideProps() {
	const url = 'https://qmgpu00g.api.sanity.io/v1/data/query/production?query='
	const data = await fetch(url + groq`*[_type=="data"]`).then((data) => data.json())

	return {
		props: {
			data,
		},
	}
}

const VelgFag = ({ data }) => {
	const list = data.result.map((item) => {
		return item
	})

	list.sort((a, b) => (a.name > b.name ? 1 : -1))

	const result = list.map((item) => {
		return (
			<li
				className={s.link}
				key={item._id}>
				<Link href={'/velgfag/' + item.slug.current.toString()}>{item.name}</Link>
			</li>
		)
	})
	return (
		<div className={s.container}>
			<Header>Velg fag du vil regne ut</Header>
			<ul className={s.list}>{result}</ul>
		</div>
	)
}

export default VelgFag
