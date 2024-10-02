import React from "react";
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
	box-shadow:
		0 10px 20px 0 rgba(0, 0, 0, 0.2),
		0 12px 40px 0 rgba(0, 0, 0, 0.19);
	width: 400px;
	height: 600px;
	padding: 5px;
`;

const Profile = (props) => {
	const ProfileClasses = classNames([
		props.width ? `w-${props.width}` : null,
		"profile",
	]);

	const renderItems = (items) => {
		// Convert items object to an array and sort by Type in the specified order
		const typeOrder = { rod: 1, bait: 2, pet: 3, boat: 4 };
		const sortedItems = Object.keys(items)
			.map((key) => items[key])
			.sort((a, b) => {
				console.log(a, b);
				const typeA = typeOrder[a.Type.toLowerCase()];
				const typeB = typeOrder[b.Type.toLowerCase()];
				return typeA - typeB;
			});

		return sortedItems.map((item, index) => {
			if (typeof item === "object") {
				return (
					<div key={index}>
						<ProfileCI Item={item} />
						<p>{item.ItemName}</p>
					</div>
				);
			} else {
				return (
					<div key={index}>
						<h3>{index}</h3>
						<p>{item}</p>
					</div>
				);
			}
		});
	};

	return (
		<ProfileStyled className={ProfileClasses}>
			<h1>Profile</h1>
			<div className="profileLeft">
				<p>Username:</p>
				<p>Experience:</p>
				<p>Coins:</p>
			</div>
			<div className="profileRight">
				<p>{props.user.Username}</p>
				<p>{props.user.Experience}</p>
				<p>{props.user.Coins}</p>
			</div>
			<div className="currentLayout">{renderItems(props.user.Items)}</div>
			<button>Logout</button>
		</ProfileStyled>
	);
};

export default Profile;
