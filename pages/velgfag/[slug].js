import groq from 'groq'
import client from './client'
import s from '../../styles/slug.module.css'
import { useEffect, useState, useRef, createRef } from 'react'
import React from 'react'
import Resultat from '../resultat'
import Link from 'next/link'

export default function ProfilePage({ data }) {
	const [message, setMessage] = useState()
	const [updated, setUpdated] = useState(message)
	const handleClick = () => {
		setUpdated(message)
	}
	const userInput = +message + +updated
	console.log(userInput)
	return (
		<>
			<div className={s.container}>
				<h1>{data.name}</h1>

				<h2>{data.className}</h2>

				<div className={s.fields}></div>
				{data.classes.map((item) => {
					return (
						<p>
							Jeg har deltat i
							<input
								key={item._id}
								type='number'
								onChange={(e) => {
									setMessage(e.target.value), handleClick()
								}}
							/>
							av {item.class}
						</p>
					)
				})}
			</div>
			<button props={userInput}>
				<Link href='/resultat'>Regn ut</Link>
			</button>
		</>
	)
}

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

export async function getStaticProps(connumber) {
	// It's important to default the slug so that it doesn't return "undefined"

	// const url = 'https://qmgpu00g.api.sanity.io/v1/data/query/production?query='
	const { slug = '' } = connumber.params
	const data = await client.fetch(
		`
    *[_type == "data" && slug.current == $slug][0]{name, slug, className, code, classes}
  `,
		{ slug }
	)
	return {
		props: {
			data,
		},
	}
}
