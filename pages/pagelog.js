// Hover farge kan gjerne være blå fargen fra illustrasjonen istedenfor denne som er hvit
import s from '../styles/pagelog.module.css'
import Link from 'next/link'
import Header from '../components/Header'
import client from '../client'
import groq from 'groq'

const pagelog = ({ data }) => {
	return (
		<div className={s.container}>
			<Header>Changelog</Header>
			<div className={s.content}>
				{data.map((item) => {
					const date = item.date.split('-').reverse().join('-')
					return (
						<p key={item._id}>
							{date}: {item.text}
						</p>
					)
				})}
			</div>
		</div>
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
