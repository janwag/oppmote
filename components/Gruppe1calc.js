export default function Gruppe1calc(cmsDataG1, userInputGroupe1) {
	const classes = cmsDataG1?.map((item) => {
		return item.class
	})
	const arbeidsgrupperStorgrupperSum = classes?.map((i) => i).reduce((prev, curr) => prev + curr, 0)
	const arbeidsgrupper = userInputGroupe1?.Arbeidsgrupper || 0
	const storgrupper = userInputGroupe1?.Storgrupper || 0

	const userInputSum = arbeidsgrupper + storgrupper
	const grupperProsent = (userInputSum / arbeidsgrupperStorgrupperSum) * 100
	const gruppe1Arr = [1]
	return { grupperProsent, gruppe1Arr }
}
