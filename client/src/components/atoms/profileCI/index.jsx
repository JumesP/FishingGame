import React, { useEffect, useState } from 'react';
import classNames from "classnames";
import styled from "styled-components";

const ProfileCIStyled = styled.div`
  height: 75px;
  width: 75px;
  border: 1px solid #000;
  margin: 0 10px;
`;

const ProfileCI = ({ Item }) => {

    const data = {
        ItemName: Item.ItemName,
        Enchants: Item.Enchants,
        Rarity: Item.Rarity,
        Durability: Item.Durability,
        Type: Item.Type,
    };

    const dataImg = {
        rod: "/images/rod.png",
        bait: "/images/bait.png",
        pet: "/images/pet.png",
        boat: "/images/boat.png",
    };

    const ProfileCIClasses = classNames([
        (data.Rarity) ? `rarity-${data.Rarity.toLowerCase()}` : 'rarity-common',
        'profileCI',
    ]);

    return (
        <ProfileCIStyled
            className={ProfileCIClasses}
        >
            <img src={dataImg[data.Type]} alt="Item"/>
        </ProfileCIStyled>
    );
};

export default ProfileCI;