// import React, { useEffect, useState } from "react";

// export default function Counter() {
// 	const [count, setCount] = useState(0);

// 	useEffect(() => {
// 		console.log("components mounted");
// 		return function () {
// 			//return function gets called whenever a func is unmounted
// 			console.log("component exit...");
// 		};
// 	}, []);

// 	useEffect(() => {
// 		if (count > 0) {
// 			console.log("console updated");
// 		}
// 	}, [count]);

// 	return (
// 		<div>
// 			<h1>Counter: {count} </h1>
// 			<button
// 				onClick={() => {
// 					setCount(count + 1);
// 				}}
// 			>
// 				+
// 			</button>
// 			<button
// 				onClick={() => {
// 					setCount(count - 1);
// 				}}
// 			>
// 				-
// 			</button>
// 		</div>
// 	);
// }
import React from 'react';
import { Link } from 'react-router-dom';
import './WelcomePage.css';

function WelcomePage() {
  // return (
  //   <div className="welcome-container">
  //     <h1>SOCIAL  MEDIA  APP</h1>
  //     <p>Please login or register to continue.</p>
  //     <div className="buttons-container">
  //       <Link to="/login" className="button">Login</Link>
  //       <Link to="/register" className="button">Register</Link>
  //     </div>
  //   </div>
  // );
  return (
    <div className="container">
      <header>
        <h1>Welcome to Social Media App</h1>
      </header>
      <main>
        <p>Connect with friends and share your moments!</p>
        {/* <button className="btn">Sign Up</button>
        <button className="btn">Log In</button> */}
        <Link to="/login" className="btn signup">Log In</Link>
        <Link to="/register" className="btn login">Sign Up</Link>
      </main>
    </div>
  );
}

export default WelcomePage;
