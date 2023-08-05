import JekyllSide from "../assets/Images/Products/Cannondale/Jekyll/side.png"
import JekyllQuarter from "../assets/Images/Products/Cannondale/Jekyll/quarter.png"
import JekyllCloseUp from "../assets/Images/Products/Cannondale/Jekyll/close-up.png"
import AtalayaSide from "../assets/Images/Products/J-Guillem/Atalaya/side.jpg"
import AtalayaFrame from "../assets/Images/Products/J-Guillem/Atalaya/frame.jpg"
import AtalayaCloseUp from "../assets/Images/Products/J-Guillem/Atalaya/close-up.jpg"

export const Products = {
	Bikes: [
		{
			name: "Jekyll",
			manufacturer: "Cannondale ",
			images: [JekyllSide, JekyllQuarter, JekyllCloseUp],
			price: 5999.99,
			description:
				"Even though Jekyll boasts a unique combo of go-fast tech that’s never been seen before, it's not a bike that talks. It’s a bike that goes.",
			colorOptions: "Green",
			sizeOptions: "S,M,L, XL",
		},
		{
			name: "Atalaya Gravel",
			manufacturer: "J Guillem",
			price: 4999.99,
			images: [AtalayaSide, AtalayaFrame, AtalayaCloseUp],
			description: `With its ability to accommodate most 700c x 45mm and 27.5" x 2.1" tyres (w/o mudguards), 
            the Atalya Gravel is the frame for riders who want everything. It’s elegant, clean lines are accentuated and 
            strengthened by the addition of pre-cast components, centred around a one-piece bottom bracket-chain 
            stay system. The head tube is also cast and allows for full internal cable routing compatible with both mechanical 
            and di2 cables. And fully-cast, titanium drop outs allow for Flat Mount Disc Brake System, with thru axles. The 
            Atalaya is our state-of-the-art, do-it-all, go anywhere machine with a super versatility that doesn’t look out of 
            place however you use it: with mudguards and a small rack, or stripped of all its fixtures for use as a pure gravel bike.`,
			color: "Blue",
			size: "L",
		},
		// Add more bikes here if needed
	],
	Clothes: [
		{
			name: "Cycling Jersey",
			price: 49.99,
			description: "A moisture-wicking jersey for comfortable rides.",
			color: "Yellow",
			size: "S",
		},
		{
			name: "Cycling Shorts",
			price: 39.99,
			description: "Padded shorts for reduced friction and increased comfort.",
			color: "Black",
			size: "M",
		},
		// Add more clothes here if needed
	],
	Accessories: [
		{
			name: "Bike Helmet",
			price: 69.99,
			description: "A durable helmet for maximum head protection.",
			color: "White",
			size: "M/L",
		},
		{
			name: "Bike Lock",
			price: 19.99,
			description: "A sturdy lock to keep your bike safe and secure.",
			color: "Black",
			size: "One Size",
		},
		// Add more accessories here if needed
	],
}
