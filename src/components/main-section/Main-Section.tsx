// import { withRouter } from "react-router-dom"
import { Products } from "../Products"

const MainSection = ({ history }: any) => {
	console.log(Products.Bikes[0].images[0])
	return (
		<div className="main-section-container">
			<div className="main-section-middle">
				<div className="ms-m-image">
					<img src={Products.Bikes[0].images[0]} className="w-auto h-32" />
				</div>
				<div className="ms-m-description">{Products.Bikes[0].description}</div>
			</div>
		</div>
	)
}

export default MainSection
