import React from 'react';

export default function Services() {
	return (
		<div className='inner'>
			<h1>Services</h1>
			<h4>
				At Atelier Prosto Mariya, I offer comprehensive tailoring services
				to help you with all your clothing needs. Because every tailor shop
				provides different services, it’s essential to know what a shop can
				and can’t do before you drop off your clothing to be altered.
			</h4>
			<section className='service'>
				<h2>Alterations</h2>
				<div className='container'>
					<div className='serviceContent'>
						<p>
							Although tailoring isn’t a great option if you’ve
							dramatically changed clothing sizes, it is helpful if
							you’ve changed by just one size. If you’ve recently gone up
							or down a size, you don’t necessarily need to buy all-new
							clothing. Keep your current wardrobe by getting your
							favorite articles of clothing altered. I can let out or
							take in the waist of your favorite garments. I can even
							adjust the sizes of sleeves and dress straps! Maybe you
							haven’t changed sizes, but you still need to adjust your
							clothing to make it fit perfectly. An experienced tailor is
							the only one that can help you! Whether you need help with
							your wedding dress, formal gown, or any other article of
							clothing, come to our tailor shop!
						</p>
					</div>
					<span className='serviceImage'>
						<img src='/images/alterations.jpg' alt='' />
					</span>
				</div>
			</section>
			<section className='service' id='mending'>
				<h2>Mending</h2>
				<div className='containerReverse'>
					<div className='serviceContent'>
						<p>
							Have you ever torn a hole in your favorite pair of jeans or
							blouse? This can be devastating, especially if it was an
							expensive item or a garment that holds sentimental value.
							You don’t have to throw them out. Simply take them to my
							shop!
							<br />I would be happy to patch up, sew, or mend your items
							to restore their former glory. With my services, a small
							tear doesn’t have to be the end of your favorite clothing
							item. Just drop it off, and I’ll make it good as new!
						</p>
					</div>
					<span className='serviceImage'>
						<img src='/images/mending.jpg' alt='' />
					</span>
				</div>
			</section>
			<section className='service' id='hemming'>
				<h2>Hemming</h2>
				<div className='container'>
					<div className='serviceContent'>
						<p>
							Sometimes your clothing flatters your body shape perfectly,
							but it’s a little long. Have no fear! Hemming is a cinch
							for an experienced tailor! I can change the length of your
							skirt, dress, jeans, or dress pants. When I’m done with
							your hemming, you’ll be wearing clothing that’s the perfect
							fit and length.
							<br />
							Sometimes the exact opposite is true. Your clothing fits
							nicely, but it just isn’t long enough. If you’re above
							average height, this could be an ongoing life struggle.
							Don’t settle for clothing that isn’t the ideal length. I
							can make all your garments the perfect length!
						</p>
					</div>
					<span className='serviceImage'>
						<img src='/images/hemming.jpg' alt='' />
					</span>
				</div>
			</section>
			<section className='service' id='buttonsZippers'>
				<h2>Adding Buttons and Zippers</h2>
				<div className='containerReverse'>
					<div className='serviceContent'>
						<p>
							At Atelier Prosto Mariya, I can fix your broken buttons and
							zippers. I can also add them to your clothing, even if your
							clothing never had them to begin with. Having buttons or
							zippers on your clothing can help you adjust your dresses,
							skirts, and more with ease. They make your attire look
							extra stylish and help you slip into your clothing quickly
							without the assistance of others.
						</p>
					</div>
					<span className='serviceImage'>
						<img src='/images/buttons_zippers.jpg' alt='' />
					</span>
				</div>
			</section>
			<section className='service' id='customClothing'>
				<h2>Custom Clothing</h2>
				<div className='container'>
					<div className='serviceContent'>
						<p>
							Can’t find the exact clothing you’ve been looking for? I
							can create custom clothing that will be the perfect
							addition to your wardrobe. If you love wearing unique
							clothing, you can’t get any more unique than a custom
							dress, top, or other items from Atelier Prosto Mariya! My
							custom clothing will help you feel confident and beautiful!
							<br />I can also help you fall more in love with essential
							pieces in your wardrobe. I can change the neckline on a
							shirt or dress to ensure it’s as flattering as possible.
							Just tell me your vision for your clothing, and I’ll try to
							make it happen! I can remove the collars on collared
							shirts, alter fur and leather items, and so much more.
						</p>
					</div>
					<span className='serviceImage'>
						<img src='/images/customClothing.jpg' alt='' />
					</span>
				</div>
			</section>
			<p>Use Professional Tailoring Services from Atelier Prosto Mariya</p>
			<p>
				Don’t ever attempt to alter or repair a garment yourself. The
				results could be irreversible. Leave all your garment repair needs
				to the real experts Atelier Prosto Mariya! Call today to make an
				appointment at the tailor shop.
			</p>
		</div>
	);
}
