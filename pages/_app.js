import s from '../styles/globals.css'
import Layout from '../components/Layout'
import Head from 'next/head'
function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<meta
				name='viewport'
				content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
			/>
			<Component {...pageProps} />
		</Layout>
	)
}

export default MyApp
