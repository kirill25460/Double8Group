import React, { useState } from 'react';

import { NavLink } from 'react-router-dom';
import {
  ReviewName,
  TryCardPhoto,
  WrapAvatar,
  TryButtonReview,
  CardButton,
  CardContainerHover,
  ReviewType,
  ReviewText,
} from './TryCard.styled';

export const ReviewCard = ({
  id,
  body,
  photomessage,
  user: { username, type },
}) => {
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
          <ReviewName>{username}</ReviewName>
          <ReviewType>{type}</ReviewType>
        </WrapAvatar>
        <TryCardPhoto src={photomessage} alt="ph" />
        <ReviewText>{body}</ReviewText>
        {isHovered && (
          <CardButton>
            <NavLink to={`reviews/${id}`}>
              <TryButtonReview>Read Full Review</TryButtonReview>
            </NavLink>
          </CardButton>
        )}
      </CardContainerHover>
    </>
  );
};
