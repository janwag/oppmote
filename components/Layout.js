import Footer from '../components/footer'
import Navbar from '/components/navbar.js'
export default function Layout({ children }) {
	return (
		<div>
			<Navbar />
			<div>{children}</div>
			<Footer />
		</div>
	)
}
