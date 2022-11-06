// function VelgFag() {

// 	return (
// 		<div>
// 			<h1>test</h1>
// 		</div>
// 	)
// }

// export default VelgFag

const Fag = () => {
	const tid = fetch('../pages/api/hello')
	return tid.map((fag) => {
		return (
			<div>
				<h2>name: {fag.name}</h2>

				<hr />
			</div>
		)
	})
}

export default Fag
