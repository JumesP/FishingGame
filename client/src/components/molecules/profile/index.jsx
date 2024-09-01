import React, { useEffect, useState } from 'react';
import classNames from "classnames";
import styled from "styled-components";

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
	])

	return (
		<ProfileStyled
			className={ProfileClasses}
		>
			<h1>Profile</h1>
			<div className="profileLeft">
				<p>Username:</p>
				<p>Level:</p>
				<p>Experience:</p>
				<p>Coins:</p>
				<p>Gems:</p>
			</div>
			<div className="profileRight">
				<p>{props.user.username}</p>
				<p>{props.user.level}</p>
				<p>{props.user.experience}</p>
				<p>{props.user.coins}</p>
				<p>{props.user.gems}</p>
			</div>
			<div className="currentLayout">
				<div>{props.user.items.rod}</div> {/* image of rod*/}
				<div>{props.user.items.bait}</div>
				<div>{props.user.items.pet}</div>
				<div>{props.user.items.boat}</div>

			</div>
			<button>Logout</button>
		</ProfileStyled>
	);
}

export default Profile;