import Link from 'next/link'
import s from '../styles/fagliste.module.css'
import data from '../data.json'
export default function FagListe() {
	return data.map((item) => {
		return (
			<Link
				key={item.id}
				href={'/velgfag/' + item.id.toString()}
			>
				<button>{item.name}</button>
			</Link>
		)
	})
}
