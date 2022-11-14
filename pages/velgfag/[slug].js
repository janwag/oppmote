import groq from 'groq'
import client from './client'

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
	const { slug = '' } = context.params
	const post = await client.fetch(
		`
    *[_type == "data" && slug.current == $slug][0]
  `,
		{ slug }
	)
	return {
		props: {
			post,
		},
	}
}

export default function ProfilePage({ data }) {
	console.log(data)

	return (
		<div className={s.container}>
			<h1>{data.name}</h1>
		</div>
	)
}
