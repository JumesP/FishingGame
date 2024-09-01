import React, { useEffect, useState } from 'react';
import classNames from "classnames";
import styled from "styled-components";

const CurrentLayoutStyled = styled.div`
	display: grid;
	grid-template-rows: 1fr 5fr 2fr;
	justify-content: center;
	justify-items: center;
	align-items: center;
  
  
	border: 5px solid black;
	border-radius: 50px;
	box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.2), 0 12px 40px 0 rgba(0, 0, 0, 0.19);
	width: 400px;
	height: 600px;
	padding: 5px;
`;

const CurrentLayout = props => {
	const CurrentLayoutClasses = classNames([
		'currentLayout',
	])

	return (
		<CurrentLayoutStyled
			className={CurrentLayoutClasses}
		>
			<form name="form1" id="form1">
				Fishing Rods:
				<select name="Rods" id="Rods">
					{Array.isArray(props.inventory?.rods) ? (
						props.inventory.rods.map((rod, index) => (
							<option key={index} value={rod.id}>{rod.name}</option>
						))
					) : (
						<option value="">No rods available</option>
					)}
				</select>

				Baits:
				<select name="Baits" id="Baits">
					{Array.isArray(props.inventory?.baits) ? (
						props.inventory.baits.map((baits, index) => (
							<option key={index} value={baits.id}>{baits.name}</option>
						))
					) : (
						<option value="">No baits available</option>
					)}
				</select>

				Pets:
				<select name="Pets" id="Pets">
					{Array.isArray(props.inventory?.pets) ? (
						props.inventory.pets.map((pets, index) => (
							<option key={index} value={pets.id}>{pets.name}</option>
						))
					) : (
						<option value="">No pets available</option>
					)}
				</select>

				Boats:
				<select name="Boats" id="Boats">
					{Array.isArray(props.inventory?.boats) ? (
						props.inventory.boats.map((boats, index) => (
							<option key={index} value={boats.id}>{boats.name}</option>
						))
					) : (
						<option value="">No boats available</option>
					)}
				</select>
			</form>
		</CurrentLayoutStyled>
	);
}

export default CurrentLayout;