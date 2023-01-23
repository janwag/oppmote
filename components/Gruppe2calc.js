export default function Gruppe2calc(cmsDataG2, userInputGroupe2) {
	let cmsData = {}
	cmsDataG2.map((item) => {
		return (cmsData[item.name] = item.class)
	})
	const seminar = userInputGroupe2.Seminar || 0
	const oppgaver = userInputGroupe2.Oppgaver || 0
	const kommenteringer = userInputGroupe2.Kommenteringer || 0

	const oppgaverCalc = (oppgaver * 100) / cmsData.Oppgaver
	const kommenteringerCalc = (kommenteringer * 100) / cmsData.Kommenteringer
	const seminarCalc = (seminar / cmsData.seminar) * 100
	const obj = [oppgaverCalc, kommenteringerCalc, seminarCalc]
	let arr = []
	obj.map((item) => {
		if (item >= 0) {
			arr.push(item)
		}
	})
	const gruppe2Obj = arr
	return gruppe2Obj
}
