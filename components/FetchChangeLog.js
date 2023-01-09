import axios from 'axios'
import { useState, useEffect } from 'react'

function Render() {
	const [data, setData] = useState([])
	useEffect(() => {
		axios.get('https://qmgpu00g.api.sanity.io/v1/data/query/production?query=*%5B_type%3D%3D%22chagelog%22%5D').then((res) => {
			return setData(res.data)
		})
	}, [])
	console.log(data)
	return (
		<ul>
			{data.result?.map((item) => {
				return (
					<li>
						{item.date}: {item.text}
					</li>
				)
			})}
		</ul>
	)
}
export default Render
