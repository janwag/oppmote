import groq from 'groq'
import client from '../../client'
// import { useState } from 'react'
// import Result, { Test } from '../../components/resultPage'
// import { useForm } from 'react-hook-form'
// import ClassNameHeader from '../../components/ClassNameHeader'
// import SeminarCalc from '../../components/seminarCalc'
import NormalCalc from '../../components/normalCalc'
import SemiarCalc from '../../components/seminarCalc'

export default function ProfilePage({ dataFromCms }) {
	if (dataFromCms.name != 'EXFAC') {
		return <NormalCalc cmsdata={dataFromCms} />
	} else {
		return <SemiarCalc cmsdata={dataFromCms} />
	}
}

export async function getStaticPaths() {
	const respon = await client.fetch(groq`*[_type == 'data']`)
	// export async function getStaticPaths() {
	// 	const respon = await client.fetch(groq`*[_type == 'data']`)

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
	const { slug = '' } = context.params
	const dataFromCms = await client.fetch(
		`
    *[_type == "data" && slug.current == $slug][0]{name, slug, className, code, classes, Gruppe1, Gruppe2}
  `,
		{ slug }
	)
	return {
		props: {
			dataFromCms,
		},
	}
}
