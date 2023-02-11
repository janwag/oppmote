import groq from 'groq'
import Link from 'next/link'
import s from '../styles/info.module.css'
import InfoHeader from '../components/infoHeader'
import sanityClient from '../client'

export default function Info({ data }) {
	console.log(data)
	// const about = data.result.about.map((item) => {
	// 	const aboutText = item.children.text
	// 	return aboutText
	// })
	// const whoMadeIt = data.result[0].whoMadeIt.map((item) => {
	// 	const whoMadeItText = item.children.text
	// 	return whoMadeItText
	// })
	// const userAgreement = data.result[0].userAgreement.map((item) => {
	// 	const userAgreementText = item.children.text
	// 	return userAgreementText
	// })
	// const lastUpdate = data.result[0].lastUpdate
	// console.log(lastUpdate)

	return (
		<div className={s.container}>
			{/* <h1>Viktig informasjon om applikasjonen</h1>
			<ul className={s.list}>
				<li>
					<Link href={'#section_1'}>Om tjenesten</Link>
				</li>
				<li>
					<Link href={'#section_2'}>Hvem står bak</Link>
				</li>
				<li>
					<Link href={'#section_3'}>Vilkår og ansvarsfraskrivelse</Link>
				</li>
			</ul>
			<div
				id='section_1'
				className={s.section_1}>
				<InfoHeader header={'Om tjenesten'} />
				{about}
			</div>
			<div
				id='section_2'
				className={s.section_2}>
				<InfoHeader header={'Hvem står bak tjenesten'} />
				{whoMadeIt}
			</div>
			<div
				id='section_3'
				className={s.section_3}>
				<InfoHeader header={'Vilkår og ansvarsfraskrivelse'} />
				{userAgreement}
			</div>
			{lastUpdate[0].children.text}
			<Link href={'/pagelog'}>
				<p>{lastUpdate[1].children.text}</p>
			</Link> */}
		</div>
	)
}

export async function getServerSideProps() {
	const data = await sanityClient.fetch(
		groq` *[_type == 'info']{
  about[]{children[0]{text}},
  whoMadeIt[]{children[0]{text}},
userAgreement[]{children[0]{text}},
lastUpdate[]{children[0]{text}}}`
	)

	return {
		props: {
			data,
		},
	}
}
