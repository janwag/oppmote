import Link from 'next/link'
import s from '../styles/fagliste.module.css'
import data from '../data.json'
export default function FagListe() {
	return data.map((item) => {
		const name = item.name
		return (
			<Link href={'/velgfag/' + `${name}`.toLowerCase().replace(/\s+/g, '-')}>
				<p>{item.name}</p>
			</Link>
		)
	})
}
