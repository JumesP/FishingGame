import React, { useEffect, useState } from 'react';
import classNames from "classnames";
import styled from "styled-components";


const NextandBackStyled = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    width: 100%;
    height: auto;
    //height: 75px;
`;

const NextandBack = props => {

    const CardClasses = classNames([
        (props.rarity) ? `rarity-${props.rarity}` : 'rarity-common',
        "NextandBack",
    ])

    return (
        <NextandBackStyled
            className={CardClasses}
            {...props}
        >
            <button>Back</button>
            <button>Next</button>
        </NextandBackStyled>
    );
}

export default NextandBack;