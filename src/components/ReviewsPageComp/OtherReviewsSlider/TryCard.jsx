import React, { useState } from 'react';
import {
  
  TryCardPhoto,
  WrapAvatar,
  TryButtonReview,
  CardButton,
  CardContainerHover,
} from './TryCard.styled';

export const ReviewCard = ({ body,photomessage, user: { username, type } }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
    
        <CardContainerHover
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <WrapAvatar>

              <p>{username}</p>
              <p>{type}</p>

          </WrapAvatar>
          <TryCardPhoto src={photomessage} alt="ph" />
          <p>
            {body}
          </p>
          {isHovered && (
          <CardButton>
            <TryButtonReview>Read Full Review</TryButtonReview>
          </CardButton>
           )}
        </CardContainerHover>
      </>
    
  );
};
