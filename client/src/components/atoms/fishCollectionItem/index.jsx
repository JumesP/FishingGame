import React from 'react';
import PropTypes from 'prop-types';
import classNames from "classnames";
import styled from "styled-components";

const FishCollectionItemStyled = styled.div`
  max-width: fit-content;
`;

const FishCollectionItem = ({ fish, ...props }) => {
    const content = {
        image: fish.image,
        title: fish.header,
        details: {
            price: fish.details.price,
            health: fish.details.health,
            weight: fish.details.weight,
            length: fish.details.length,
        },
    };

    const FishCollectionItemClasses = classNames([
        'FCfish',
    ]);

    return (
        <FishCollectionItemStyled
            className={FishCollectionItemClasses}
            {...props}
        >
            <div className="FCfishImage">
                <img src={content.image} alt="fish" />
            </div>
            <div className="FCfishHeader">{content.title}</div>
            <div className="FCfishDetails">
                {Object.values(content.details).map((detail, index) => (
                    <p key={index}>{detail}</p>
                ))}
            </div>
            <button>Details</button>
        </FishCollectionItemStyled>
    );
}

FishCollectionItem.propTypes = {
    fish: PropTypes.shape({
        image: PropTypes.string.isRequired,
        header: PropTypes.string.isRequired,
        details: PropTypes.shape({
            price: PropTypes.string.isRequired,
            health: PropTypes.string.isRequired,
            weight: PropTypes.string.isRequired,
            length: PropTypes.string.isRequired,
        }).isRequired,
    }).isRequired,
};

export default FishCollectionItem;