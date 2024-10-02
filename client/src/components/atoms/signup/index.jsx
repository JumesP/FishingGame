import React, { useState } from "react";
import classNames from "classnames";
import styled from "styled-components";

const SignupStyled = styled.div`
	display: grid;
	grid-template-rows: 1fr 5fr 2fr;
	justify-content: center;
	justify-items: center;
	align-items: center;
	border: 5px solid black;
	border-radius: 50px;
	box-shadow:
		0 10px 20px 0 rgba(0, 0, 0, 0.2),
		0 12px 40px 0 rgba(0, 0, 0, 0.19);
	width: 400px;
	height: 600px;
	padding: 5px;
	background-color: #596b50;
`;

const SignupForm = ({ handleSignup }) => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const SignupClasses = classNames(["signup"]);

	const handleSubmit = (event) => {
		event.preventDefault();
		handleSignup({ username, password });
	};

	return (
		<SignupStyled className={SignupClasses}>
			<h1>Sign Up</h1>
			<form onSubmit={handleSubmit}>
				<label>
					Username: &emsp;
					<input
						type="text"
						name="username"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
				</label>
				<label>
					Password: &emsp;
					<input
						type="password"
						name="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</label>
				<button type="submit">Sign Up</button>
			</form>
		</SignupStyled>
	);
};

export default SignupForm;
