import React, { useState, useEffect } from "react";
import classNames from "classnames";
import styled from "styled-components";

const ItemSizes = {
	small: "small", // square
	medium: "medium", // rectangle
	large: "large", // large square
};

const StoreItemStyled = styled.div``;

const StoreItem = ({ item }) => {
	return (
		<StoreItemStyled>
			<p>{item.name}</p>
			<p>{item.price}</p>
			<p>{item.description}</p>
			<p>{item.size}</p>
		</StoreItemStyled>
	);
};

export default StoreItem;
