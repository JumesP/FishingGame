import React from "react";

const FishCollectionItem = ({ fish }) => {

    const content = {
        image: fish.image,
        title: fish.header,
        details: [
            fish.details.price,
            fish.details.health,
            fish.details.weight,
            fish.details.length,
        ],
    };

    return (
        <div className="FCfish">
            <div className="FCfishImage">
                <img src={content.image} alt="fish" />
            </div>
            <div className="FCfishHeader">{content.header}</div>
            <div className="FCfishDetails">
                {content.details.map((detail, index) => (
                    <p key={index}>{detail}</p>
                ))}
            </div>
            <button>Details</button>
        </div>
    );
}

export default FishCollectionItem;