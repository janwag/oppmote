import data from '../../data.json'

export async function getStaticPaths() {
	const res = await fetch('http://localhost:3000/api/hello')
	console.log(res)

	const paths = data.map((data) => {
		return {
			params: { name: data.name },
		}
	})
	return {
		paths,
		fallback: false,
	}
}

export async function getStaticProps(context) {
	const post = await fetch('../../data.json')
	return {
		props: {
			post,
		},
	}
}

export default function FagPage({ post }) {
	console.log(post)
	return <h1>test</h1>
}
