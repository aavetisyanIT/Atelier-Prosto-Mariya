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

	//sticky navbar
	//unfinished!!!!
	//Need to  find sideBarBottom dynamically depending on screen size
	//Need to apply correct styles to div with class="inner"
	//something like this style={{position: fixed, top: -1250px}} where top is sideBarBottom
	// useEffect(() => {
	// 	function handleScroll(e) {
	// 		let sideBarBottom = e.target.documentElement.scrollTop;
	// 		let innerDiv = document.querySelector('#sidebar');
	// 		if (sideBarBottom >= 1000 && window.innerWidth > 1280) {
	// 			console.log('sticking');
	// 			innerDiv.style['position'] = '-webkit-sticky';
	// 			innerDiv.style['top'] = '0';
	// 		} else if (sideBarBottom <= 1000 && window.innerWidth > 1280) {
	// 			console.log('unsticking');
	// 			innerDiv.style['position'] = 'relative';
	// 			innerDiv.style['top'] = '0';
	// 		}
	// 	}
	// 	window.addEventListener('scroll', handleScroll, { passive: true });
	// 	return () => {
	// 		window.removeEventListener('scroll', handleScroll);
	// 	};
	// }, []);

	return (
		<>
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
									className={
										subMenuToggle ? 'opener active' : 'opener'
									}
								>
									Services
								</span>
								<ul>
									<li>
										<Link href='/services#alterations'>
											Alterations
										</Link>
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
							<h2>Ante interdum</h2>
						</header>
						<div className='mini-posts'>
							<article>
								<a href='helpfulArticals' className='image'>
									<img src='images/wardrobe.jpg' alt='' />
								</a>
								<p>6 Tailor Services That Can Benefit Your Wardrobe</p>
							</article>
							<article>
								<a href='helpfulArticals' className='image'>
									<img src='images/prolong.jpg' alt='' />
								</a>
								<p>5 Secrets to Prolonging the Life of Your Clothing</p>
							</article>
						</div>
						<ul className='actions'>
							<li>
								<a href='helpfulArticals' className='button'>
									More
								</a>
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
						<p className='copyright'>© Untitled. All rights reserved.</p>
					</footer>
				</div>
			</div>
		</>
	);
}
