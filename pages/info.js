import groq from 'groq'
import s from '../styles/info.module.css'
import sanityClient from '../client'
import { PortableText } from '@portabletext/react'
import Head from 'next/head'

export default function Info({ data }) {
	const List = data[0].info.map((item) => {
		if (item.style == 'h2') {
			const id = '#' + item.children[0].text
			const nav = (
				<li
					key={item._key}
					className={item.children[0].text}>
					<a href={id}>{item.children[0].text}</a>
				</li>
			)

			return nav
		}
	})
	return (
		<>
			<Head>
				<title>Viktig informasjon | Oppmøteprosent</title>
			</Head>
			<div className={s.container}>
				<div className={s.menu}>
					<h1>Info</h1>
					{List}
				</div>
				<div className={s.content}>
					<Content text={data[0].info} />
				</div>
			</div>
		</>
	)
}

const Content = ({ text }) => {
	const components = {
		block: {
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
