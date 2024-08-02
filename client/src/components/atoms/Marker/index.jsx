import React, { useEffect, useState } from 'react';
import classNames from "classnames";
import styled from "styled-components";

const MarkerStyled = styled.div`
    //width: 10px;
  width: 100%;
    height: 1px;
    border: 1px solid black;
    position: absolute;
`;

const Marker = props => {
    return (
        <MarkerStyled
            {...props}
        >
        </MarkerStyled>
    )
}

export default Marker;