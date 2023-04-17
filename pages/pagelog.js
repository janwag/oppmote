// Hover farge kan gjerne være blå fargen fra illustrasjonen istedenfor denne som er hvit
import s from '../styles/pagelog.module.css'
import Link from 'next/link'
import Header from '../components/Header'
import client from '../client'
import groq from 'groq'
import Head from 'next/head'

const pagelog = ({ data }) => {
	return (
		<>
			<Head>
				<title>Changelog | Oppmøteprosent</title>
			</Head>
			<div className={s.container}>
				<Header>Changelog</Header>
				<div className={s.content}>
					{data.map((item) => {
						const date = item.date.split('-').reverse().join('-')
						return (
							<div
								className={s.box}
								key={item._id}>
								<p>
									{date}: {item.text}
								</p>
							</div>
						)
					})}
				</div>
			</div>
		</>
	)
}
export default pagelog

export async function getServerSideProps() {
	const data = await client.fetch(groq`*[_type == "chagelog"] | order(date desc)`)
	return {
		props: {
			data,
		},
	}
}
