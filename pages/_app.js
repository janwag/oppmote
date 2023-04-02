import s from '../styles/globals.css'
import Layout from '../components/Layout'
import Head from 'next/head'
function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1.0, maximum-scale=1.0'
				/>
				<link
					rel='apple-touch-icon'
					sizes='180x180'
					href='/apple-touch-icon.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='32x32'
					href='/favicon-32x32.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='16x16'
					href='/favicon-16x16.png'
				/>
				<link
					rel='manifest'
					href='/site.webmanifest'
				/>
				<link
					rel='mask-icon'
					href='/safari-pinned-tab.svg'
					color='#ff8000'
				/>
				<meta
					name='msapplication-TileColor'
					content='#da532c'
				/>
				<meta
					name='theme-color'
					content='#ffffff'></meta>
			</Head>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	)
}

export default MyApp
