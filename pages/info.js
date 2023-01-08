import s from '../styles/info.module.css'
function info() {
	return (
		<div className={s.container}>
			<h1>Viktig informasjon om applikasjonen</h1>
			<h2>Innhold</h2>
			<ul>
				<li>
					<a href='#om'>Om tjenesten</a>
				</li>
				<li>
					<a href='#hvem'>Hvem står bak</a>
				</li>
				<li>
					<a href='#vilkar'>Vilkår og ansvarsfraskrivelse</a>
				</li>
			</ul>
			<h2>Om tjenesten</h2>
			<p>
				Applikasjonen {`"Oppmøteprosent"`} er en tjeneste som lar deg regne ut din prosent av obligatorisk oppmøte på studiet. Formålet er at du på en enkel og effektiv måte skal kunne skrive inn hva
				du har deltatt på. Deretter vil du få vite hvilken prosent du havner på, og om du følgelig er innenfor eller utenfor det obligatoriske kravet om 75% deltakelse.
			</p>
			<p>
				I applikasjonen er det lagt inn enkelte forhåndsdefinerte fag. Dette gjør det enda lettere å regne ut sin prosent, da man slipper å søke opp hva som kreves av de ulike aktivitetene. Alt i alt
				en mye enklere måte å finne ut hvordan man ligger an. Dersom du ikke finner ditt fag i listen, er det også en manuell side. Den manuelle siden lar deg legge inn både ditt oppmøte, i tillegg
				til det obligatoriske oppmøtet i det emnet. Det jobbes kontinuerlig med å få lagt inn flere fag, og å kunne ekspandere til andre studiesteder og emner.
			</p>
			<h2>Hvem står bak tjenesten</h2>
			Det er aksjeselskapet Foks AS som står som juridisk eier av tjenesten. Juridisk navn: Foks AS Organisasjonsnummer:
			<a href='https://w2.reg.no/enhet/sok/detalj.jsp?orgnr=923302727'>923 302 727</a>
			Epost-adresse: <a href='mailto:post@foks.no?subject=Mail fra Oppømteprosent'>post@foks.no</a>
			<p>
				Telefonnummer: <a href='tel:+4753215353'>53 21 53 53</a>
			</p>
			<p>
				Tjenesten er utviklet og finansiert av Foks AS etter idé og ønske fra daglig leder i aksjeselskapet. Daglig leder er <a href='https://www.linkedin.com/in/jan-martin-wåge/'>Jan Martin Wåge</a>.
				Tjenesten er på ingen måte assosiert med Universitetet i Bergen eller andre aktører, og er ene og alene en tjeneste fra Foks AS.
			</p>
			<p>
				Jan Martin Wåge er selv student på tredje studieår ved Det juridiske fakultet ved Universitetet i Bergen. Etter flere år hvor man måtte forholde seg til{' "utfordrende"'} formler på
				fakultetets nettsider når det kom til oppmøteberegning, kom ideen om å lage dette til et digitalt system. Her holder systemet kontroll på hva som er maksimum deltakelse, og regner ut en
				prosent basert på input fra din deltakelse. Dette er et mye bedre system, og man slipper egne kalkulatorer og excel-ark som kan skape krøll i utregningen.
			</p>
			<h2 id='vilkar'>Vilkår og ansvarsfraskrivelse</h2>
			<p>
				Foks AS som juridisk eier og utvikler fraskriver seg alt ansvar i forbindelse med uk av tjenesten. All uk skjer på eget ansvar, og det tas forbehold om feil. Det kan forekomme feil i
				utregningen, eller at et feil antall obligatoriske aktiviteter er lagt inn i fagene, og så videre. Foks AS tilstreber likevel at tjenesten skal være feilfri, men ukere må ha forståelse for at
				ting kan gå galt. Ansvar for feil kan ikke tillegges Foks AS eller dets samarbeidspartnere.
			</p>
			<p>
				Foks AS og applikasjonen tilstreber å ta vare på ditt personvern. Tjenesten lagrer ikke dine input, og dine input blir kun ukt til å regne ut din obligatoriske oppmøteprosent. Det kan bli ukt
				cookies/informasjonskapsler for å føre statistikk over uk. Tjenesten hostes hos Domeneshop, og uker deres tjeneste for besøksstatistikk.
			</p>
			<p>
				Tjenesten er sist oppdatert 04.11.2022.
				<a href='changelog.html'>Gå til vår changelog ved å trykke her.</a> Vilkår er sist oppdatert 04.11.2022.
			</p>
			{/* <!-- Jeg kan manuelt legge inn dato her etterhvert som tjenesten oppdateres når den er live --> */}
			{/* <footer>
      <!-- Footer og siden skal følge malen fra applikasjonen 
    </footer> */}
		</div>
	)
}
export default info
