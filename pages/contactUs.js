import React from 'react';
import emailjs from 'emailjs-com';

export default function Blog() {
	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				'service_jrx43ji',
				'template_pa5q2me',
				e.target,
				'user_JZLigJLWkqlOvo1jwrS0M',
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				},
			);
		e.target.reset();
	};

	return (
		<div>
			<div className='row gtr-200'>
				<div className='col-6 col-12-medium'>
					{' '}
					<h1>Contant Us</h1>
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
				<div className='col-6 col-12-small'>
					<p>
						We know that getting your garments tailored can get a little
						confusing. If you have any questions, please send Atelier
						Prosto Mariya a message! I am happy to get back to you as soon
						as I can. You can also call me at (773) 603-3396 or stop by
						our shop Monday through Friday between 9 a.m. and 5 p.m. I
						can’t wait to meet you!
					</p>
				</div>
			</div>
		</div>
	);
}
