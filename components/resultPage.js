import Link from 'next/link'
import s from '../styles/result.module.css'

const Result = ({ userInput, classesValue }) => {
	const array = classesValue.map((item) => {
		const array = item.class
		return array
	})

	const arraySum = (array) => {
		let arraySum = 0 // initialize sum

		// Iterate through all elements
		// and add them to sum
		for (let i = 0; i < array.length; i++) arraySum += array[i]

		return arraySum
	}
	// converting userInput object to array
	const userData = Object.values(userInput)
	// Driver code
	const numConverter = userData.map((str) => {
		// using map() to convert array of strings to numbers
		return parseInt(str)
	})

	let arr = numConverter

	const sum = (arr) => {
		let sum = 0 // initialize sum

		// Iterate through all elements
		// and add them to sum
		for (let i = 0; i < arr.length; i++) sum += arr[i]

		return sum
	}

	const percentCalc = (sum(arr) / arraySum(array)) * 100
	return (
		<div className={s.container}>
			<h1 className={s.header}>
				Din oppmøte prosent er <span>{Math.floor(percentCalc)}%</span>
			</h1>
			<Link href={'/'}>Ny utregning</Link>
		</div>
	)
}

export default Result
