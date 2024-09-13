import React from "react";
import styled from "styled-components";
import classNames from "classnames";

const UserDetailsStyled = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	justify-items: center;
	align-items: center;
  
	border: 5px solid black;
	border-radius: 50px;
	box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.2), 0 12px 40px 0 rgba(0, 0, 0, 0.19);
	width: 300px;
	//height: 200px;
	padding: 5px;
	
	min-height: fit-content;
`;

const UserDetails = props => {

	const content = {
		"title": "User Details",
		"UserID": "UserID: " + props.user.UserID,
		"username": "Username: " + props.user.username,
		"tankID": "TankID: " + props.user.tankID,
		"inventoryID": "InventoryID: " + props.user.InventoryID,
		"experience": "Experience: " + props.user.Experience,
		"coins": "Coins: " + props.user.Coins,
	}

	const userDetailsClasses = classNames([
		"containers"
	])

	return (
		<UserDetailsStyled
			{...props}
			className={userDetailsClasses}
		>
			<h1 className="title">{content.title}</h1>
			<p>--------------</p>
			<p className="name">{content.UserID}</p>
			<p className="username">{content.username}</p>
			<p className="tankID">{content.tankID}</p>
			<p className="inventoryID">{content.inventoryID}</p>
			<p className="experience">{content.experience}</p>
			<p className="coins">{content.coins}</p>
		</UserDetailsStyled>
	)
}

export default UserDetails;