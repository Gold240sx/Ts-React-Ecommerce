import { Link } from "react-router-dom"
import { BiShoppingBag, BiHomeAlt2 } from "react-icons/bi"
import BikeShopLogo from "../../assets/Images/bikeShopLogo.png"
import CartIcon from "../cart-icon/CartIcon.tsx"
import "./Header.styles.scss"

const Header = () => {
	return (
		<nav className="container items-center nav-menu">
			<div className=" logo">
				<Link to="/">
					<img
						src={BikeShopLogo}
						className="absolute h-auto scale-75 sm:scale-[85%] sm:hover:scale-90 md:scale-95 md:hover:scale-100 lg:hover:scale-105 -mt-5 w-[9rem] p-2 -rotate-3 bg-white rounded-xl  border-2 shadow-black shadow-2xl"
					/>
				</Link>
			</div>
			<ul className="flex h-full my-auto text-3xl align-middle ">
				<li>
					<Link to="/">
						<BiHomeAlt2 className="hover:text-teal-500 hover:scale-110" />
					</Link>
				</li>
				<li>
					<Link to="/shop">
						<BiShoppingBag className="hover:text-teal-500 hover:scale-110" />
					</Link>
				</li>
			</ul>
			<CartIcon />
		</nav>
	)
}

export default Header
