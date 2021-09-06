import Link from 'next/link';
import Navbar from '../components/Navbar';
import Head from 'next/head'

function Contact() {
	return (
		<>
			<Head>
			  <title>Contact</title>
			</Head>

			<Navbar />

			<section className="hero">
			  <div className="container">
			    <div className="text-wrapper w-full">
			      <h1 className="title">Contact</h1>
			      <p className="description">
			      	I just made some changes, it  will work=
			      </p>
			      <ul className="contact-links">
			      	<li className="contact-item">Email: fanel@me.com</li>
			      	<li className="contact-item">Phone: +620000004321007</li>
			      </ul>
		      </div>
	      </div>
			</section>
		</>
	);
}

export default Contact;