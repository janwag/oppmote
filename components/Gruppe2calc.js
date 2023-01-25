export default function Gruppe2calc(cmsDataG2, userInputGroupe2) {
	let cmsData = {}
	cmsDataG2.map((item) => {
		return (cmsData[item.name] = item.class)
	})
	const seminar = userInputGroupe2?.Seminar
	const oppgaver = userInputGroupe2?.Oppgaver
	const kommenteringer = userInputGroupe2?.Kommenteringer

	const oppgaverCalc = (oppgaver * 100) / cmsData.Oppgaver
	const kommenteringerCalc = (kommenteringer * 100) / cmsData.Kommenteringer
	const seminarCalc = (seminar * 100) / cmsData.seminar
	const obj = [oppgaverCalc, kommenteringerCalc, seminarCalc]
	let arr = []
	obj.map((item) => {
		if (item >= 0) {
			arr.push(item)
		}
	})
	const added = arr.length > 0 ? arr.reduce((a, b) => a + b) : 0
	return { added, arr }
}
