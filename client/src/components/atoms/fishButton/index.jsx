import React, { useEffect, useState } from 'react';
import classNames from "classnames";
import styled from "styled-components";

const FishButtonStyled = styled.button`
  padding: 10px;
  background-color: orange;
  border-radius: 20%;
`;

const FishButton = props => {
        const FishButtonClasses = classNames([
            (props.size) ? `fishbutton-${props.size}` : 'fishbutton-md',
            "fishbutton",
        ]);

        return (
            <FishButtonStyled
                {...props}
                className={FishButtonClasses}
            >
                {props.children}
            </FishButtonStyled>
        )
}

export default FishButton;