import groq from 'groq'
import client from './client'
import s from '../../styles/slug.module.css'
import { useState } from 'react'

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

export const clickHandler = () => {
	console.log(container.input.value)
}

export default function ProfilePage({ data }) {
	console.log(data)
	return (
		<>
			<div className={s.container}>
				<h1>{data.name}</h1>

				<h2>{data.className}</h2>
				<div className={s.fields}>
					{data.arbeidsgrupper > 0 ? (
						<p className='Arbeidsgrupper'>
							Jeg har deltatt på <input type='number' /> av {data.arbeidsgrupper} arbeidsgrupper.
						</p>
					) : (
						''
					)}

					{data.storgrupper > 0 ? (
						<div className='storgrupper'>
							Jeg har deltatt på <input type='number' /> av {data.storgrupper} storgrupper.
						</div>
					) : (
						''
					)}

					{data.oppgaver > 0 ? (
						<p className='oppgaver'>
							Jeg har deltatt på <input type='number' /> av {data.oppgaver} oppgaver.
						</p>
					) : (
						''
					)}
					{data.kommentering > 0 ? (
						<p className='kommentering'>
							Jeg har deltatt på <input type='number' /> av {data.kommentering} kommenteringer.
						</p>
					) : (
						''
					)}
					{data.seminar > 0 ? (
						<p className='seminar'>
							Jeg har deltatt på <input type='number' /> av {data.seminar} seminar.
						</p>
					) : (
						''
					)}
				</div>
			</div>

			<button
				className={s.regn_ut}
				onClick={clickHandler}>
				Regn ut
			</button>
		</>
	)
}
