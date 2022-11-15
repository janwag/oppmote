import groq from 'groq'
import client from './client'
import s from '../../styles/slug.module.css'

export async function getStaticPaths() {
	const respon = await client.fetch(groq`*[_type == 'data']`)

	const paths = respon.map((item) => {
		const id = item._id
		return {
			params: { id: id },
		}
	})

	return {
		paths,
		fallback: false,
	}
}

export async function getStaticProps(context) {
	// It's important to default the slug so that it doesn't return "undefined"
	const { id = '' } = context.params
	const data = await client.fetch(`*[_type=="data" && _id.current]`)
	return {
		props: {
			data,
		},
	}
}

export default function ProfilePage({ data }) {
	console.log(data)

	return (
		<div className={s.container}>
			<h1>{data}</h1>
		</div>
	)
}
