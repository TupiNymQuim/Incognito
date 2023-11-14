// import Navbar from './navbar';
import Footer from './footer';

export default function MainContainer({children}) {
	return (
		<>
	{/*	<Navbar/> */}
			<div>{children}</div>
		<Footer />
		</>
	);
}
