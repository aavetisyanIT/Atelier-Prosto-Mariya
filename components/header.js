import React from 'react';
import Link from 'next/link';

export default function Header() {
	return (
		<header id='header'>
			<Link href='/'>
				<img id='logo' src='/images/logo.png' alt='Logo' />
				{/* <strong>Atelier Prosto Mariya</strong> */}
			</Link>
			<ul className='icons'>
				<li>
					<a href='#' className='icon brands fa-linkedin'>
						<span className='label'>LinkedIn</span>
					</a>
				</li>
				<li>
					<a href='#' className='icon brands fa-facebook'>
						<span className='label'>Facebook</span>
					</a>
				</li>
				<li>
					<a href='#' className='icon brands fa-instagram'>
						<span className='label'>Instagram</span>
					</a>
				</li>
				<li>
					<a href='#' className='icon brands fa-twitter'>
						<span className='label'>Twitter</span>
					</a>
				</li>
			</ul>
		</header>
	);
}
