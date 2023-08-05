import JekyllSide from "../assets/Images/Products/Cannondale/Jekyll/side.png"
import JekyllQuarter from "../assets/Images/Products/Cannondale/Jekyll/quarter.png"
import JekyllCloseUp from "../assets/Images/Products/Cannondale/Jekyll/close-up.png"
import AtalayaSide from "../assets/Images/Products/J-Guillem/Atalaya/side.jpg"
import AtalayaFrame from "../assets/Images/Products/J-Guillem/Atalaya/frame.jpg"
import AtalayaCloseUp from "../assets/Images/Products/J-Guillem/Atalaya/close-up.jpg"

export const Products = {
	Bikes: [
		{
			id: 1,
			name: "Jekyll",
			manufacturer: "Cannondale ",
			images: [JekyllSide, JekyllQuarter, JekyllCloseUp],
			price: 5999.99,
			category: "Enduro",
			tagline: "Rough and Roudy!",
			description: `The Cannondale Jekyll 1 Mountain Bike boasts a unique combo of a go-fast tech that's never been seen 
            before. This bike thrives in steep descents, rowdy mountains, & gets down at the bike park. Sure, it loves to climb with 
            the given 72.5° seat tube angle but Cannondale crafted the Jekyll to be a downhill ripper with a 64° head tube angle 
            & suspension layout that features a gravity cavity where the rear shock lives inside the downtube to provide a lower 
            center of gravity for the best handling to keep you planted through turns & stable at high speeds. The swingarm pivots 
            high on the seat tube so the rear wheel can move backwards & up when the trail gets chunky with roots & rocks so 
            you don't lose your momentum. The Guidler Pulley above the chainring takes care of all that pesky pedal kickback by 
            eliminating chain growth. The 4-bar linkage allows the bike to counteract rise & squat when you pedal & brake to give 
            you maximum traction through it all. The Jekyll uses Cannondale's Proportional Response to allow riders of all sizes to 
            enjoy all the goods as the bike's frame sizes are tailored to each the average rider's center of gravity for that specific
             frame size. The Cannondale Jekyll 1 is a mountain bike made for the ones who wanna go fast - we'll see you at the 
            bottom!`,
			colorOptions: ["Green", "Tan", "Yellow"],
			sizeOptions: ["S", "M", "L", "XL"],
		},
		{
			id: 2,
			name: "Atalaya Gravel",
			manufacturer: "J Guillem",
			price: 4999.99,
			category: "Gravel",
			images: [AtalayaSide, AtalayaFrame, AtalayaCloseUp],
			tagline: "The nicest Bike we've ever ridden!",
			description: `With its ability to accommodate most 700c x 45mm and 27.5" x 2.1" tyres (w/o mudguards), 
            the Atalya Gravel is the frame for riders who want everything. It’s elegant, clean lines are accentuated and 
            strengthened by the addition of pre-cast components, centred around a one-piece bottom bracket-chain 
            stay system. The head tube is also cast and allows for full internal cable routing compatible with both mechanical 
            and di2 cables. And fully-cast, titanium drop outs allow for Flat Mount Disc Brake System, with thru axles. The 
            Atalaya is our state-of-the-art, do-it-all, go anywhere machine with a super versatility that doesn’t look out of 
            place however you use it: with mudguards and a small rack, or stripped of all its fixtures for use as a pure gravel bike.`,
			colorOptions: ["Titanium"],
			sizeOptions: ["M", "L"],
		},
		// Add more bikes here if needed
	],
	Clothes: [
		{
			id: 1,
			name: "Cycling Jersey",
			manufacturer: "Cycling Co.",
			images: ["jersey1.jpg", "jersey2.jpg"],
			price: 49.99,
			category: "Tops",
			tagline: "A moisture-wicking jersey for comfortable rides.",
			description: "A moisture-wicking jersey made from high-quality materials.",
			colorOptions: ["Yellow", "Blue", "Green"],
			sizeOptions: ["S", "M", "L", "XL"],
		},
		{
			id: 2,
			name: "Cycling Shorts",
			manufacturer: "Cycling Co.",
			images: ["shorts1.jpg", "shorts2.jpg"],
			price: 39.99,
			category: "Bottoms",
			tagline: "Padded shorts for reduced friction and increased comfort.",
			description: "Padded shorts designed for maximum comfort during cycling.",
			colorOptions: ["Black"],
			sizeOptions: ["S", "M", "L"],
		},
		// Add more clothes here if needed
	],
	Accessories: [
		{
			id: 1,
			name: "Bike Helmet",
			manufacturer: "Safety Gear Co.",
			images: ["helmet1.jpg", "helmet2.jpg"],
			price: 69.99,
			category: "Protective Gear",
			tagline: "A durable helmet for maximum head protection.",
			description: "A durable helmet designed to provide maximum head protection.",
			colorOptions: ["White", "Black", "Red"],
			sizeOptions: ["M/L", "XL"],
		},
		{
			id: 2,
			name: "Bike Lock",
			manufacturer: "Security Co.",
			images: ["lock1.jpg", "lock2.jpg"],
			price: 19.99,
			category: "Protective Gear",
			tagline: "A sturdy lock to keep your bike safe and secure.",
			description: "A sturdy lock designed to keep your bike safe from theft.",
			colorOptions: ["Black", "Silver"],
			sizeOptions: ["One Size"],
		},
		// Add more accessories here if needed
	],
}
