import "./FeaturedProducts.styles.scss"

const FeaturedProduct = ({ name, images, price }: any) => {
	return (
		<div className="flex flex-col justify-between w-1/5 featured-product">
			<div className="flex items-center justify-center object-contain object-center my-auto featured-image">
				<img src={images[0]} alt="product" className="my-auto" />
			</div>
			<div className="flex flex-col mt-auto align-bottom name-price">
				<h3 className="line-clamp-1">{name}</h3>
				<p>$ {price} </p>
				<button className="button is-black nomad-btn whitespace-nowrap">ADD TO CART</button>
			</div>
		</div>
	)
}

export default FeaturedProduct
