import groq from 'groq'
import s from '../styles/info.module.css'
import sanityClient from '../client'
import { PortableText } from '@portabletext/react'

export default function Info({ data }) {
	const List = data[0].info.map((item) => {
		if (item.style == 'h2') {
			const nav = <li className={item.children[0].text}>{item.children[0].text}</li>
			console.log(nav)
			return nav
		}
	})
	return (
		<div className={s.container}>
			<h1>Info</h1>
			{List}
			<Content text={data[0].info} />
			<div className={s.content}></div>
		</div>
	)
}

const Content = ({ text }) => {
	const components = {
		block: {
			// Ex. 1: customizing common list types
			bullet: ({ children }) => <ul>{children}</ul>,
			h2: ({ children }) => <h2 id={children}>{children}</h2>,
		},
	}

	return (
		<PortableText
			className={s.content}
			value={text}
			components={components}
		/>
	)
}

export async function getServerSideProps() {
	const data = await sanityClient.fetch(groq` *[_type == 'info']`)
	return {
		props: {
			data,
		},
	}
}
