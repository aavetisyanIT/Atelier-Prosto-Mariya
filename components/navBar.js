import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function NavBar() {
	const [navBarToggle, setNavBarToggle] = useState(true);
	const [subMenuToggle, setSubMenuToggle] = useState(false);

	//toggle NavBar
	const navBarClickHandle = () => {
		setNavBarToggle(!navBarToggle);
	};
	//toggle SideBar
	const handleSubMenuToggle = () => {
		setSubMenuToggle(!subMenuToggle);
	};
	//close SideBar if width of viewport is less then 1280px
	useEffect(() => {
		window.addEventListener('resize', () => {
			if (window.innerWidth < 1280) {
				setNavBarToggle(!navBarToggle);
			}
		});
	}, []);

	//sticky navbar at viewport 1280 and up
	useEffect(() => {
		function handleScroll(e) {
			if (window.innerWidth <= 1280) {
				return;
			} else {
				let innerDiv = document.querySelector('#sidebar > div');
				innerDiv.style['position'] = '-webkit-sticky';
				innerDiv.style['position'] = 'sticky';
				innerDiv.style['top'] = '0';
			}
		}
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div id='sidebar' className={navBarToggle ? 'active' : 'inactive'}>
			<a onClick={navBarClickHandle} href='#sidebar' className='toggle'>
				MenuButton
			</a>
			<div className='inner'>
				{/* Menu */}
				<nav id='menu'>
					<header className='major'>
						<h2>Menu</h2>
					</header>
					<ul>
						<li>
							<Link href='/'>Home</Link>
						</li>
						<li>
							<Link href='/about'>About Us</Link>
						</li>
						<li>
							<Link href='/faq'>FAQ</Link>
						</li>
						<li>
							<span
								onClick={handleSubMenuToggle}
								className={subMenuToggle ? 'opener active' : 'opener'}
							>
								Services
							</span>
							<ul>
								<li>
									<Link href='/services'>Alterations</Link>
								</li>
								<li>
									<Link href='/services#mending'>Mending</Link>
								</li>
								<li>
									<Link href='/services#hemming'>Hemming</Link>
								</li>
								<li>
									<Link href='/services#buttonsZippers'>
										Adding Buttons and Zippers
									</Link>
								</li>
								<li>
									<Link href='/services#customClothing'>
										Custom Clothing
									</Link>
								</li>
							</ul>
						</li>
						<li>
							<Link href='/contactUs'>Contact Us</Link>
						</li>
					</ul>
				</nav>
				{/* Section */}
				<section>
					<header className='major'>
						<h2>Helpful Articales</h2>
					</header>
					<div className='mini-posts'>
						<article>
							<Link href='/helpfulArticles'>
								<a className='image'>
									<img src='images/wardrobe.jpg' alt='' />
								</a>
							</Link>

							<p>6 Tailor Services That Can Benefit Your Wardrobe</p>
						</article>
						<article>
							<Link href='/helpfulArticles'>
								<a className='image'>
									<img src='images/prolong.jpg' alt='' />
								</a>
							</Link>

							<p>5 Secrets to Prolonging the Life of Your Clothing</p>
						</article>
					</div>
					<ul className='actions'>
						<li>
							<Link href='/helpfulArticles'>
								<a className='button'>More</a>
							</Link>
						</li>
					</ul>
				</section>
				{/* Section */}
				<section>
					<header className='major'>
						<h2>Get in touch</h2>
					</header>
					<p>
						We love to hear from customers, both old and new. Send us a
						message with details on your request, or any questions you
						have on our services. We will get back to you as soon as
						possible with an answer.
					</p>
					<ul className='contact'>
						<li className='icon solid fa-envelope'>
							<a>atelierprostomariya@gmail.com</a>
							<br />
							<a href='mailto: atelierprostomariya@gmail.com'>
								Send Email
							</a>
						</li>
						<li className='icon solid fa-phone'>(773) 603-3396</li>
						<li className='icon solid fa-home'>Rosemont, IL 60018</li>
					</ul>
				</section>
				{/* Footer */}
				<footer id='footer'>
					<p className='copyright'>
						© Atelier Prosto Mariya All rights reserved.
						<br />
						<Link href='/privacyPolicy'>Privacy Policy </Link>
						and
						<Link href='/termsOfUse'> Terms of Use </Link>
					</p>
				</footer>
				<div id='end-div'></div>
			</div>
		</div>
	);
}
