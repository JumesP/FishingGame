// this will pop up after a catch,
// this will show all the stats of the fish
// give the option to sell, money goes into the bank,
// or save and it goes to the fish tanks`

import React, { useEffect, useState } from 'react';
import classNames from "classnames";
import styled from "styled-components";

const JustCaughtModalStyled = styled.dialog`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    border: 1px solid black;
    border-radius: 5px;
    padding: 10px;
    z-index: 100;
    width: 80%;
    height: fit-content;
`;

const JustCaughtModal = props => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    }


    const JustCaughtClasses = classNames([
        "justCaughtModal"
    ]);

    const content = {
        name: props.fish.name,
        price: props.fish.price,
        weight: props.fish.weight,
        length: props.fish.length,
        value: props.fish.value,
        health: props.fish.health,
    }



    return (
        <>
            <JustCaughtModalStyled
                {...props}
                className={JustCaughtClasses}
                open={isOpen}
            >
                <button onClick={toggleModal}>Close</button>
                <hr></hr>
                <div className={"JCcontent"}>
                    <img src={props.fish.url} alt="Fish" className="JCFish"/>
                    <ul>

                        {Object.entries(content).map(([key, value], index) => (
                                <li>{key}: {value}</li>
                        ))}
                    </ul>
                </div>
                <hr></hr>
                <div className="buttonContainer">
                    <button>Sell</button>
                    <button>Save</button>
                </div>
            </JustCaughtModalStyled>
            <button onClick={toggleModal}>Show the Dialog</button>
        </>
    )
}

export default JustCaughtModal;