import '../styles/globals.css'
import Layout from '../components/Layout'
import Head from 'next/head'
function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Foks AS</title>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1.0'
				/>
			</Head>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	)
}

export default MyApp
