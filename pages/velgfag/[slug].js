import groq from 'groq'
import client from '../../client'
import s from '../../styles/slug.module.css'
import { useEffect, useState } from 'react'
import React from 'react'
import Link from 'next/link'
import Result from '../../components/resultPage'
import { useRef } from 'react'
import { useForm } from 'react-hook-form'

export default function ProfilePage({ data }) {
	const [caluculate, setCalculate] = useState([])
	const { register, handleSubmit } = useForm()
	const onSubmit = (data) => {
		setCalculate(data)
	}
	return (
		<>
			{caluculate == false ? (
				<form
					className={s.container}
					onSubmit={handleSubmit(onSubmit)}>
					<h1>{data.name}</h1>

					<h2>{data.className}</h2>

					{data.classes?.map((item) => {
						return (
							<div key={item._key}>
								<p>Jeg har deltat i</p>
								<input
									key={item._id}
									type='number'
									{...register(item.name)}
								/>
								<p>av {item.class}</p>
							</div>
						)
					})}
					<input type='submit' />
				</form>
			) : (
				<Result
					userInput={caluculate}
					classesValue={data.classes}
				/>
			)}
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
