import App from 'next/app';
import NavBar from '../components/navBar';
import Header from '../components/header';
import Head from 'next/head';
import '../public/assets/css/services.css';
import '../public/assets/css/contactUs.css';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Atelier Prosto Mariya</title>
				<meta charSet='utf-8' />
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1, user-scalable=no'
				/>
				<link
					rel='stylesheet'
					href='https://unpkg.com/react-sidebar-ui@1.2.0/dist/index.css'
				/>
				<link rel='stylesheet' href='/assets/css/main.css' />
			</Head>
			{/* Wrapper */}
			<div id='wrapper'>
				{/* Main */}
				<div id='main'>
					<div className='inner'>
						<Header />
						<Component {...pageProps} />
					</div>
				</div>
				<NavBar />
			</div>
		</>
	);
}

MyApp.getInitialProps = async (appContext) => {
	// calls page's `getInitialProps` and fills `appProps.pageProps`
	const appProps = await App.getInitialProps(appContext);

	return { ...appProps };
};

export default MyApp;
