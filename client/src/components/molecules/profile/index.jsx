import React, { useEffect, useState } from 'react';
import classNames from "classnames";
import styled from "styled-components";
import ProfileCI from "../../atoms/profileCI";

const ProfileStyled = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr 1fr 1fr 1fr;
	justify-content: space-around;
	justify-items: center;
	align-items: center;
	
	border: 5px solid black;
	border-radius: 50px;
	box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.2), 0 12px 40px 0 rgba(0, 0, 0, 0.19);
	width: 400px;
	height: 600px;
	padding: 5px;
`;


const Profile = props => {
	const ProfileClasses = classNames([
		(props.width) ? `w-${props.width}` : null,
		'profile',
	]);

	console.log(props.user)

	const userDetails = {
		username: props.user.username,
		level: props.user.level,
		experience: props.user.experience,
		coins: props.user.coins,
		gems: props.user.gems,
	}

	let items = {};

	if (typeof props.user.items[1] !== 'undefined') {
		// if the currentInventories object is being parsed
		items = [
			<ProfileCI Item={props.user.items[0]} />,
			<ProfileCI Item={props.user.items[1]} />,
			<ProfileCI Item={props.user.items[2]} />,
			<ProfileCI Item={props.user.items[3]} />,
		];
	} else {
		// if a simple list of objects are being parsed
		console.log("Object");
		items = [
			<div>{props.user.items.rod}</div>,
			<div>{props.user.items.bait}</div>,
			<div>{props.user.items.pet}</div>,
			<div>{props.user.items.boat}</div>,
		]
	}

	// console.log(props.user.items.includes('rod'))

	return (
		<ProfileStyled
			className={ProfileClasses}
		>
			<h1>Profile</h1>
			<div className="profileLeft">
				<p>Username:</p>
				<p>Experience:</p>
				<p>Coins:</p>
			</div>
			<div className="profileRight">
				<p>{props.user.username}</p>
				<p>{props.user.level}</p>
				<p>{props.user.experience}</p>
				<p>{props.user.coins}</p>
				<p>{props.user.gems}</p>
			</div>
			<div className="currentLayout">
				{items}
			</div>
			<button>Logout</button>
		</ProfileStyled>
	);
}

export default Profile;