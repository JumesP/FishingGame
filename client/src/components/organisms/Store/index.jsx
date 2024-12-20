import React, { useState, useEffect } from "react";
import classNames from "classnames";
import styled from "styled-components";

import StoreItem from "../../molecules/storeItem";

const StoreStyled = styled.div`
	display: flex;
	flex-direction: column;
`;

const Store = ({ items }) => {
	const StoreClassName = classNames({
		store: true,
	});
};

export default Store;
