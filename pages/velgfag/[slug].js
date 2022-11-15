import groq from 'groq'
import client from './client'
import s from '../../styles/slug.module.css'

export async function getStaticPaths() {
	const respon = await client.fetch(groq`*[_type == 'data']`)

	const paths = respon.map((item) => {
		return {
			params: { slug: item.slug.current },
		}
	})

	return {
		paths,
		fallback: false,
	}
}

export async function getStaticProps(context) {
	// It's important to default the slug so that it doesn't return "undefined"

	// const url = 'https://qmgpu00g.api.sanity.io/v1/data/query/production?query='
	const { slug = '' } = context.params
	const data = await client.fetch(
		`
    *[_type == "data" && slug.current == $slug][0]
  `,
		{ slug }
	)
	return {
		props: {
			data,
		},
	}
}

export default function ProfilePage({ data }) {
	return (
		<div className={s.container}>
			<h1>{data.name}</h1>
			<h2>{data.className}</h2>
			{data.seminar > 0 ? (
				<div className='seminar'>Seminar: {data.seminar}</div>
			) : (
				''
			)}
		</div>
	)
}
