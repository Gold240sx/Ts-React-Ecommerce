import Header from "./components/header/Header"
import Hero from "./components/hero/Hero"
import MainSection from "./components/main-section/Main-Section"

function App() {
	return (
		<>
			<div className="">
				<Header />
				<Hero />
				<MainSection history={null} />
			</div>
		</>
	)
}

export default App
