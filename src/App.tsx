import Carousel from "./components/carousel/Carousel"
import Header from "./components/header/Header"
import HeroBanner from "./components/hero-banner/Hero-Banner"
import MainSection from "./components/main-section/Main-Section"
import FeaturedCollection from "./components/featured-collection/Featured-Collection"
import Footer from "./components/footer/Footer"

function App() {
	return (
		<>
			<div className="">
				<Header />
				<div className="relative w-screen">
					<Carousel autoslide={true} interval={9000} />
					<HeroBanner />
				</div>
				{/* <Hero /> */}
				<MainSection history={null} />
				<FeaturedCollection />
				<Footer />
			</div>
		</>
	)
}

export default App
