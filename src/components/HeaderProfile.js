import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: flex-end;
`;

const ProfilePicture = styled.img`
  height: 24px;
  width: 24px;
  border-radius: 24px;
  object-fit: cover;
`;

const ProfileName = styled.span`
  font-size: 14px;
  margin-left: 8px;
`;

function HeaderProfile({ picture, name, ...otherProps }) {
  const [firstName] = name.split(' ');

  return (
    <Wrapper {...otherProps}>
      <ProfilePicture src={picture} alt={name} />
      <ProfileName>{firstName}</ProfileName>
    </Wrapper>
  );
}

export default HeaderProfile;
