import React, { useState } from "react";
// import { Link } from "react-router-dom";
import Counter from "./WelcomePage.js";
import Login from "./Login.js";

export default function Home() {
	const [enableCounter, setCounter] = useState(true);

	if (enableCounter) {
		return <Counter></Counter>;
	} else {
		return <Login></Login>;
	}
	// return (
	// 	<div>
	// 		<h1>Home</h1>
	// 		<Link to="login">Login</Link>
	// 		<br></br>
	// 		{/* <a href="/Login> Login anchor </a>} { page reloads in <a>tag everytime whereas Link creates a virtual dom */}
	// 	</div>
	// );
}