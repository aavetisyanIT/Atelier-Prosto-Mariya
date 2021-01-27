import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export default function ContactUs() {
	const [toast, setToast] = useState('');
	const [toastMsg, setToastMsg] = useState('');

	const toggleToast = (msg, mode) => {
		setToastMsg(msg);
		setToast(`toast toast--${mode} toast--visible`);
		setTimeout(() => setToast('toast'), 3000);
	};
	const sendEmail = e => {
		e.preventDefault();

		emailjs
			.sendForm(
				'service_jrx43ji',
				'template_pa5q2me',
				e.target,
				'user_JZLigJLWkqlOvo1jwrS0M',
			)
			.then(() => toggleToast('Email was sent', 'success'))
			.catch(error => {
				console.log(error.text);
				toggleToast('Sorry there was a problem', 'error');
			});
		e.target.reset();
	};

	return (
		<div>
			<h1>Contact Us</h1>
			<div className={toast}>{toastMsg}</div>
			<div className='formContainer'>
				<div className='form'>
					{/* Form */}
					<form onSubmit={sendEmail}>
						<div className='col-6 col-12-xsmall'>
							<input
								type='text'
								name='subject'
								id='subject'
								placeholder='Subject'
							/>
						</div>
						<div className='row gtr-uniform'>
							<div className='col-6 col-12-xsmall'>
								<input
									type='text'
									name='name'
									id='name'
									placeholder='Name'
								/>
							</div>
							<div className='col-6 col-12-xsmall'>
								<input
									type='email'
									name='email'
									id='email'
									placeholder='Email'
								/>
							</div>
							{/* Break */}
							<div className='col-12'>
								<textarea
									name='message'
									id='message'
									placeholder='Enter your message'
									rows={6}
									defaultValue={''}
								/>
							</div>
							{/* Break */}
							<div className='col-12'>
								<ul className='actions'>
									<li>
										<input
											type='submit'
											className='primary'
											defaultValue='Send Message'
										/>
									</li>
								</ul>
							</div>
						</div>
					</form>
				</div>
				<div className='formText'>
					<h4>
						We know that getting your garments tailored can
						get a little confusing. If you have any questions,
						please send Atelier Prosto Mariya a message! I am
						happy to get back to you as soon as I can. You can
						also call me at (773) 603-3396 or stop by our shop
						Monday through Friday between 9 a.m. and 5 p.m. I
						can’t wait to meet you!
					</h4>
				</div>
			</div>
			<section>
				<header className='major' id='contentHeader'>
					<h2>WHY US?</h2>
				</header>
				<p>
					If you’ve never used my services before, you’re
					probably wondering: what’s so different about Atelier
					Prosto Mariya? Why are my services better than any
					other tailor in the Chicago area? My experience and
					commitment to customer satisfaction are two of the
					biggest reason why you should choose me over my
					competitors.
				</p>
				<div className='features'>
					<article>
						<div className='content'>
							<h3>
								The Most Passionate Tailor in the
								Chicago Area
							</h3>
							<p>
								What makes me better than all the other
								tailors out there? It’s simple: my
								passion for sewing. You won’t find my
								level of experience from any other local
								tailor. I’ve been doing this for over 30
								years, and I’ve never loved it more!
								Sewing is in my blood. I do it, just
								like my mother did it, and I am passing
								my profession along to my daughter.
								Through all three generations, we’ve
								perfected the art of sewing. Even after
								three-plus decades of perfecting my
								craft, I still am always trying to learn
								new techniques and get even better.
							</p>
						</div>
					</article>
					<article>
						<div className='content'>
							<h3>
								Committed to Consistently Delivering
								Customer Satisfaction
							</h3>
							<p>
								The Atelier Prosto Mariya is committed
								to making every customer satisfied with
								my work. I do whatever it takes to make
								you happy. No matter what service you
								want from us, you know exactly the
								quality you’ll be getting when you pick
								up your finished clothing. I understand
								that clothes are more than just clothes.
								They hold sentimental value and play a
								huge role in your self-esteem. In fact,
								that’s part of the reason I started my
								business! I want to make clothing that
								helps people feel great. And when a
								person’s clothing no longer does that
								for them, I want to help them regain
								that special feeling. You can trust me
								to take care of your garments. When I’m
								done with your items, they’ll be in
								their very best condition. You’ll never
								feel more fabulous than when you’re
								wearing clothing items that have been
								tailored by the Atelier Prosto Mariya.
							</p>
						</div>
					</article>

					<article>
						<div className='content'>
							<h3>
								Feel Good About Where Your Dollars Are
								Going
							</h3>
							<p>
								Helping Ukraine is close to my heart
								because of my Ukrainian roots. That’s
								why I make it a point to donate to the
								Ukrainian National Women’s League of
								America. This non-profit organization
								helps unite women of Ukrainian descent.
								When your paying for my services, you’re
								making a tangible difference in the
								lives of these women.
							</p>
						</div>
					</article>
					<article>
						<div className='content'>
							<h3>Choose Atelier Prosto Mariya</h3>
							<p>
								Is it time to take your beloved clothing
								items to a tailor? Make an appointment
								with the Atelier Prosto Mariya! You
								won’t find a tailor in the Chicago area
								with more passion or experience!
							</p>
						</div>
					</article>
				</div>
			</section>
			<hr className='major' />
		</div>
	);
}
