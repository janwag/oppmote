export default function Gruppe1calc(cmsDataG1, userInputGroupe1) {
	const classes = cmsDataG1?.map((item) => {
		return item.class
	})
	const arbeidsgrupperStorgrupperSum = classes?.map((i) => i).reduce((prev, curr) => prev + curr, 0)
	const arbeidsgrupper = userInputGroupe1?.Arbeidsgrupper || 0
	const storgrupper = userInputGroupe1?.Storgrupper || 0

	const userInputSum = arbeidsgrupper + storgrupper
	const grupperProsent = (userInputSum * 100) / arbeidsgrupperStorgrupperSum
	return grupperProsent
}
