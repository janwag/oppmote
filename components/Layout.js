import Footer from '../components/footer'
import Navbar from '/components/navbar.js'
export default function Layout({ children }) {
	return (
		<>
			<Navbar />
			{children}
			<Footer />
		</>
	)
}
