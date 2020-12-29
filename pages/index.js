import React from 'react';

export default function Home() {
	return (
		<>
			{/* Banner */}
			<section id='banner'>
				<div className='content'>
					<header>
						<h1>
							Crafting perfection
							<br />
							one thread at a time!
						</h1>
						<p>Welcome to your reliable Atelier Prosto Mariya!</p>
					</header>
					<p>
						While fashion trends come and go, tailored clothing is always
						in style. When you use my professional tailoring services, you
						can be confident that all your garments will fit perfectly and
						look fantastic.
					</p>
					<ul className='actions'>
						<li>
							<a href='#' className='button big'>
								Learn More
							</a>
						</li>
					</ul>
				</div>
				<span className='image object'>
					<img src='/images/fabric-needle.jpg' alt='' />
				</span>
			</section>
			{/* Section */}
			<section>
				<header className='major'>
					<h2>Our Services</h2>
				</header>
				<div className='features'>
					<article>
						<span className='icon solid fa-tshirt' />
						<div className='content'>
							<h3>Clothing Repairs</h3>
							<p>
								Torn a hole in your favorite blouse or dress? Don’t
								worry about it! My professional tailoring services can
								repair your clothing so it’s good as new. You won’t have
								to let go of those beloved items, even after they start
								showing signs of age. I can fix them!
							</p>
						</div>
					</article>
					<article>
						<span className='icon solid fa-cut' />
						<div className='content'>
							<h3>Alterations</h3>
							<p>
								Having the perfect fit is one of the most important
								elements of style. Whether something is too long, too
								short, too baggy, or too tight, clothing that doesn’t
								fit correctly makes you uncomfortable and
								self-conscious. Tailored clothing can help you reclaim
								your confidence and your comfort!
							</p>
						</div>
					</article>
					<article>
						<span className='icon solid fa-gem' />
						<div className='content'>
							<h3>Custom Creations</h3>
							<p>
								I completely understand the desire to stand out with
								your fashion sense. If you need something special to
								wear to an event, Atelier Prosto Mariya can help by
								making you a custom outfit! You’ll end up with a
								high-quality, one-of-a-kind garment. Your outfit will be
								the envy of everyone who sees you!
							</p>
						</div>
					</article>
					<article>
						<span className='icon solid fa-pencil-ruler' />
						<div className='content'>
							<h3>Customizations</h3>
							<p>
								Have an item in your closet you think could use a little
								jazzing up? Take it to Atelier Prosto Mariya! I’d be
								happy to add whatever custom elements you’d like from
								beadwork to buttons to zippers and more. I even work
								with fur and leather!
							</p>
						</div>
					</article>
				</div>
			</section>
			{/* Section */}
			<section>
				<header className='major'>
					<h2>
						Atelier Prosto Mariya can help you be more confident in your
						clothing
					</h2>
				</header>
				<div className='posts'>
					<article>
						<a href='#' className='image'>
							<img src='images/boost.jpg' alt='' />
						</a>
						<h3>
							When you know your clothes look great, you’ll automatically
							have a self-esteem boost.
						</h3>
						<p>
							It’s hard to be confident if you’re wearing clothing that
							doesn’t fit correctly or clothing that has holes and is in
							dire need of repairs. Everyone wants to look great by
							buying stylish clothing, but not everyone invests the right
							time or money into keeping clothing that way by getting
							their items tailored. Don’t settle for clothing that’s
							baggy, too-tight, or uncomfortable.
						</p>
						<ul className='actions'>
							<li>
								<a href='#' className='button'>
									More
								</a>
							</li>
						</ul>
					</article>
					<article>
						<a href='#' className='image'>
							<img src='/images/spratt.jpg' alt='' />
						</a>
						<h3>
							Three Decades of Experience. Three Generations of
							Tradition.
						</h3>
						<p>
							I’ve been sewing for over thirty years. It’s hard to find
							another tailor that matches that level of experience.
							Tailoring services have become a family tradition. My
							mother was a tailor, I’m a tailor, and I’m passing the
							craft onto my daughter. You’ll be hard-pressed to find a
							tailor that’s more passionate about sewing than I am!
							Tailoring is my whole world. I love sharing my gift with
							others.
						</p>
						<ul className='actions'>
							<li>
								<a href='#' className='button'>
									More
								</a>
							</li>
						</ul>
					</article>

					<article>
						<a href='#' className='image'>
							<img src='images/tailored.jpg' alt='' />
						</a>
						<h3>The Importance of Tailored Clothing</h3>
						<p>
							Tailored clothing is essential! It helps create the most
							flattering silhouettes and boosts your confidence. Clothing
							plays a huge role in your self-esteem. But even if you have
							the most expensive designer clothing, you won’t be
							confident if it doesn’t fit right or if it has any tears.
							This is why you should take advantage of a tailor’s
							expertise! And no one understands professional tailoring
							like Atelier Prosto Mariya. Stop by the tailor shop or call
							ahead to make an appointment. Once you start using my
							services, you’ll never go back!
						</p>
						<ul className='actions'>
							<li>
								<a href='#' className='button'>
									More
								</a>
							</li>
						</ul>
					</article>
				</div>
			</section>
		</>
	);
}
